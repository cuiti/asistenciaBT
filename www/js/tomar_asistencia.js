var DEBUG  = false;
var CHANEL = "7A9C3B55-78D0-44A7-A94E-A93E3FE118CE";
var username = "movilesbluetooth";
var password = "3mFh5qNR";
var getCursoURL = "http://movilesbluetooth.php.info.unlp.edu.ar/cursos/";
var currentCursoID = 0;

// Wait for device API libraries to load
document.addEventListener("deviceready", onDeviceReady, false);

// device APIs are available
function onDeviceReady() {
    currentCursoID = localStorage.getItem("currentCursoID");
    cordovaHTTP.useBasicAuth(username, password, function() {
        console.log('success!');
        window.vm = new AsistenciaViewModel();
        ko.applyBindings(vm);
    }, 
    function() {
        console.log('error :(');
    });
    
}

function logmsg(msg) {
    if (DEBUG) {
        Materialize.toast(msg,2000,'rounded');
    } else {
        console.log(msg);
    }
}

function AlumnoViewModel(data) {
    var self = this;
    self.device = null;
    self.connectedDevice = null;
    self.device_mac = "";
    self.present = ko.observable(false);
    self.inscripted = ko.observable(false);
    self.name ="";
    self.MAXATTEMPS = 20;
    self.triesCounter = 0;

    self.ConnectingToDevice = false;
    self.PreparingDevice    = false;
    self.ReadingDevice      = false;
    self.WritingDevice      = false;

    if (data) {
        self.name = data.name;
        self.device_mac = data.device_mac;
        self.present(data.present);
    }


    self.connect = function() {
        self.device = BC.bluetooth.devices[self.device_mac];
        self.device.connect(self.connectionSuccess, self.connectionError, CHANEL, true);
        self.device.addEventListener("deviceconnected", self.prepareStudentAndWrite);
    }


    self.connectionSuccess = function() {
        //alert("nos conectamos correctamente!!");
    };

    self.connectionError = function() {
        if (self.triesCounter <= self.MAXATTEMPS) {
            logmsg("No se pudo conectar con"+self.device.deviceName+" intentando de nuevo");
            self.device.connect(self.connectionSuccess, self.connectionError, CHANEL, true);
            self.triesCounter++;
        }
    };


    self.prepareStudentAndWrite = function(s) {
        self.connectedDevice = s;
        logmsg("device:" + s.deviceAddress + "conectado");
        self.device.prepare(self.tryWrite, self.prepareError)
    };

    self.tryWrite = function() {
        self.device.rfcommWrite("ascii","ping", self.writeSuccess, self.writeError);
    };

    self.prepareError = function(msg) {
        logmsg("No se pudo preparar el dispositivo.");
        self.device.prepare(self.tryWrite, self.prepareError)
        console.log(msg);
    };


    self.writeSuccess = function() {
        logmsg("Se envio la confirmación correctamente a "+self.name);
        self.present(true);
        self.device.disconnect(self.disconnectSuccess, self.disconnectError);
        //self.device.rfcommRead(self.readSuccess, self.readError);
    };

    self.writeError = function() {
        logmsg("no se pudo escribir, intentando de nuevo.");
        self.device.rfcommWrite("ascii","ping", self.writeSuccess, self.writeError);
    }

    self.readSuccess = function(data) {
        var d=data.value.getASCIIString();
        var e= new String("ok");
        var res= d.slice(0, 2);
        if (e.valueOf() == res.valueOf()) {
            logmsg("ping back recibido!");
            self.present(true);
            self.device.disconnect(self.disconnectSuccess, self.disconnectError);
        } else {
           logmsg("Lo que lei no es mi dato jiji");
            self.device.rfcommRead(self.readSuccess, self.readError);}
    }

    self.readError = function() {
        logmsg("No pude leer la confirmacion del alumno, intentando otra vez");
        self.device.rfcommRead(self.readSuccess, self.readError);
    }

    self.disconnectSuccess = function() {
        BC.Bluetooth.StopScan();
        window.vm.scanDevices();
        logmsg("Se desconecto del alumno correctamente.");
    };

    self.disconnectError = function() {
        logmsg("no se pudo desconectar, intentando de nuevo.");
        self.device.disconnect(self.disconnectSuccess, self.disconnectError);
    }
}

function AsistenciaViewModel() {
    var self = this;
    self.detectedDevices = ko.observableArray([]);
    self.alumnos = ko.observableArray([]);

    
    self.getDataSuccess = function(data) {
        var mappedAlumnos = $.map(data.alumnos, function(item) { 
            return new AlumnoViewModel({
                name:item.nombre+" "+item.apellido, 
                device_mac: item.device_address,
                present: false
            }) 
        });
        self.alumnos(mappedAlumnos);
    };

    self.getDataFailure = function(response) {
        console.error(response.error);
    }  

    cordovaHTTP.get(getCursoURL+currentCursoID, {}, {}, 
        function(response) {
          self.getDataSuccess(JSON.parse(response.data));
        }, 
        function(response) {
          self.getDataFailure(response);
    });


    self.registerStudent = function(student) {
        self.alumnos.push(student);
        self.detectedDevices.remove(student);
    };

    self.openBTError = function() {
        logmsg("No pudo abrirse el bluetooth");
    };

    self.openBTSuccess = function(message) {
        logmsg('Empiezo a tomar asistencia!');    
        document.getElementById('preload').style.display = "";
        setTimeout(function() {BC.Bluetooth.RFCOMMListen("appName", CHANEL, true);
}, 3000);
};

    self.scanDevices = function() {
        BC.bluetooth.addEventListener("newdevice", self.deviceFound);
        BC.Bluetooth.OpenBluetooth(self.openBTSuccess, self.openBTError);
        BC.Bluetooth.StartScan();
    };

    self.deviceFound = function(s) {
        var newDevice = s.target;
        var in_students = ko.utils.arrayFirst(self.alumnos(),
            function(item) {
                return newDevice.deviceAddress.toUpperCase() == item.device_mac.toUpperCase();
            });

        var in_detected_devices = ko.utils.arrayFirst(self.detectedDevices(),
            function(item) {
                return newDevice.deviceAddress.toUpperCase() == item.device_mac.toUpperCase();
            });

        if (in_students && !in_students.present()) {
            in_students.connect();
        } else {
            if (!in_detected_devices) {
                var a = new AlumnoViewModel({
                    name: newDevice.deviceName,
                    device_mac: newDevice.deviceAddress,
                    present: false
                })
                self.detectedDevices.push(a);
            }
        }

    };

    self.debug = function() {
        console.log("hey");
    }
}
