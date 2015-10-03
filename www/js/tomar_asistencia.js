var DEBUG  = false;
var CHANEL =  "7A9C3B55-78D0-44A7-A94E-A93E3FE118CE";
var username = "movilesbluetooth";
var password = "3mFh5qNR";
var getCursoURL = "http://movilesbluetooth.php.info.unlp.edu.ar/cursos/";
var currentCursoID = 0;
var currentClassID;
var currentCursoName;
var currentStudentID;

// Wait for device API libraries to load
document.addEventListener("deviceready", onDeviceReady, false);

// device APIs are available
function onDeviceReady() {
    $('.collapsible').collapsible({
      accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    });
    currentCursoID = window.localStorage.getItem("currentCursoID");
    currentCursoName = window.localStorage.getItem("currentCurso_Name");
    $("#completar").hide();
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
    self.id = 0;

    self.ConnectingToDevice = false;
    self.PreparingDevice    = false;
    self.ReadingDevice      = false;
    self.WritingDevice      = false;

    if (data) {
        self.id = data.id;
        self.name = data.name;
        self.device_mac = data.device_mac;
        self.present(data.present);
    }


    self.connect = function() {
        self.device = BC.bluetooth.devices[self.device_mac];
        self.device.connect(self.connectionSuccess, self.connectionError, CHANEL, true);
        self.device.addEventListener("deviceconnected", self.prepareStudentAndWrite);
    }

    self.setAsCurrent =function(){
        window.localStorage.setItem("currentStudentID",self.id);
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

    self.MarcarPresente = function() {
        swal({
                title: "¿Estas seguro de marcar como presente a este alumno?",      
                type: "warning",   
                showCancelButton: true,   
                confirmButtonColor: "#DD6B55",   
                confirmButtonText: "Marcar Presente",   
                closeOnConfirm: false 
            }, 
            function(){
                Server.pasarPresente(
                    self.id,
                    window.vm.currentClassID,
                    function(data){
                        self.alumnosPresentes.push(in_students);
                        self.alumnos.remove(in_students);
                        swal("Ok", "Alumno marcado como Presente!", "success");
                    },
                    function(data){
                        alert("No se le pudo pasar presente");
                    }
                ); 
            }
        );
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
    self.alumnosPresentes = ko.observableArray([]);
    self.currentClassID = 0;
    self.currentCursoname= ko.observable(currentCursoName);
    
    self.getDataSuccess = function(data) {
        var mappedAlumnos = $.map(data.alumnos, function(item) { 
            return new AlumnoViewModel({
                name:item.nombre+" "+item.apellido, 
                device_mac: item.device_address,
                present: false,
                id : item.id
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
        //BC.Bluetooth.RFCOMMListen("appName", CHANEL, true);
        BC.Bluetooth.StartScan();
    };

    self.classCreatedSuccess = function(data) {
        if (data.status) {
            self.currentClassID = data.id;
            $("#completar").show();
            BC.bluetooth.addEventListener("newdevice", self.deviceFound);
            BC.Bluetooth.OpenBluetooth(self.openBTSuccess, self.openBTError);
        } else {
            alert("opsie volver a intentar");
        }
    }

    self.classCreatedFailure = function(data) {
        alert("no crear");
    }

    self.tomarAsistencia = function() {
        var fecha= new Date();
        var fecha_act= fecha.getDate()+"/"+fecha.getMonth()+"/"+fecha.getFullYear();
        var hora =fecha.getHours()+":"+fecha.getMinutes()+":"+fecha.getSeconds();
        Server.crearClase(currentCursoID, fecha_act,hora,"",self.classCreatedSuccess,self.classCreatedFailure);
    };

    self.marcarCompletadoSuccess = function(data) {
        if (data.status) {
            swal("Ok","clase marcada como completada!","success");
        }
    }

    self.marcarCompletadoFailure = function(data) {
        swal("Error", "no se pudo marcar la clase como completada, vuelva a intentarlo", "error");
    }

    self.marcarCompletado = function() {
        $("#preload").hide();
        Server.marcarClaseCompletada(self.currentClassID, self.marcarCompletadoSuccess,self.marcarCompletadoFailure);
    }
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
            Server.pasarPresente(in_students.id,self.currentClassID, self.pasarPresenteSuccess, self.pasarPresenteFailure);
            self.alumnosPresentes.push(in_students);
            self.alumnos.remove(in_students);
            in_students.present(true);
            //in_students.connect();
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
