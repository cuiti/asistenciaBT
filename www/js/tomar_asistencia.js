// Wait for device API libraries to load
document.addEventListener("deviceready", onDeviceReady, false);

// device APIs are available
function onDeviceReady() {
    window.vm = new AsistenciaViewModel();
    ko.applyBindings(vm);
}



var DEBUG  = false;
var CHANEL = "7A9C3B55-78D0-44A7-A94E-A93E3FE118CE";

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
    self.tryConnectionInterval = null;
    self.tryPrepareInterval = null;
    self.tryWriteInterval = null;
    self.name ="";

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
        logmsg("No se pudo conectar con"+self.device.deviceName+" intentando de nuevo");
        self.device.connect(self.connectionSuccess, self.connectionError, CHANEL, true);
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
        self.device.rfcommRead(self.readSuccess, self.readError);
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
    self.alumnos = ko.observableArray([
        new AlumnoViewModel({
            name: "tablet_pc",
            device_mac: "54:E4:BD:BF:3F:B9",
            present: false
        }),
        new AlumnoViewModel({
            name: "tlidi3",
            device_mac: "AC:22:0B:35:EF:8B",
            present: false
        }),
        new AlumnoViewModel({
            name: "tlidi2",
            device_mac: "AC:22:0B:35:EE:4E",
            present: false
        }),
         new AlumnoViewModel({
            name: "tlidi9",
            device_mac: "5C:FF:35:6E:B0:8D",
            present: false
        }),
          new AlumnoViewModel({
            name: "juan",
            device_mac: "90:5F:2E:BD:32:DC",
            present: false
        }),
        new AlumnoViewModel({name:"Samsung", device_mac:"A4:9A:58:9E:3D:69", present: false}),
        new AlumnoViewModel({name:"Alfonso Cuitiño", device_mac : "54:44:08:CA:00:28", present: false}),
        new AlumnoViewModel({name:"Julia Lasarte", device_mac : "54:44:08:CA:BC:28", present: false})
    ]);

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
};

    self.scanDevices = function() {
        BC.bluetooth.addEventListener("newdevice", self.deviceFound);
        BC.Bluetooth.RFCOMMListen("appName", CHANEL, true);
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
