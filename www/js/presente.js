// Wait for device API libraries to load
document.addEventListener("deviceready", onDeviceReady, false);
var currentCursoID = 0;
var CHANEL = "7A9C3B55-78D0-44A7-A94E-A93E3FE118CE";
var DEBUG = false;

// device APIs are available
function onDeviceReady() {
    $("#preloader-presente").hide();
    currentCursoID = localStorage.getItem("currentCursoID");
    Server.initialize(function() { ko.applyBindings(new PresenteViewModel());}, function() { console.log('error :(');});
}

function TeacherViewModel(data) {
    var self = this;
    self.device_mac = "";

    if (data) {
        self.name = data.name;
        self.device_mac = data.device_mac;
    }
}

function PresenteViewModel() {
    var self = this;
    self.teacherDevice = null;
    self.connectedTeacher = null;
    self.PrepareInterval = null;
    self.connection_interval = null;
    self.read_interval = null;
    self.teacher = ko.observable(new TeacherViewModel({
       //name: "TABLET_PC",
       //device_mac: "54:E4:BD:BF:3F:B9"
       //name: "SAMSUNG",
       //device_mac: "A4:9A:58:9E:3D:69"
       name: "TLIDI9",
       device_mac: "5C:FF:35:6E:B0:8D"
       //name: "tablet viki",
       //device_mac: "96:4E:46:66:22:CB"
       //name: "samsung",
       //device_mac: "78:59:5E:9A:F5:E3"
    }));

    
    self.getDataSuccess = function(data) {
        self.teacher(new TeacherViewModel({name: data.usuario_profesor, device_mac: data.address_profesor}));
    };

    self.getDataFailure = function(response) {
        console.error(response.error);
    }  

    Server.getCurso(currentCursoID,self.getDataSuccess,self.getDataFailure);


    self.givePresent = function() {
        $("#preloader-presente").show();
        BC.bluetooth.addEventListener("newdevice", self.deviceFound);
        BC.Bluetooth.OpenBluetooth(function() {
            setTimeout(function() {BC.Bluetooth.RFCOMMListen("appName", CHANEL, true);}, 3000);
        

        }, function() {
            alert("bluetooth open error!");
        });
        BC.Bluetooth.StartScan();
    };

    self.deviceFound = function(s) {
        var nD = s.target;
        if (nD.deviceAddress == self.teacher().device_mac) {
            self.teacherDevice = nD;
            self.teacherDevice.connect(self.connectionSuccess, self.connectionError, CHANEL, true);
            self.teacherDevice.addEventListener("deviceconnected", self.prepareTeacherAndRead);
        } else {
            if (DEBUG) {
                Materialize.toast("Encontre a: "+nD.deviceName + "",2000,'rounded');
            }
        }
    };

    self.connectionSuccess = function() {
      // alert("nos conectamos correctamente!!");
    }
    
    self.connectionError = function() {
        if (DEBUG) {
            Materialize.toast("no se pudo establecer conexion"+self.name+"reintentando", 2000, 'rounded');
        }
        self.teacherDevice.connect(self.connectionSuccess, self.connectionError, CHANEL, true);
    };

    self.prepareTeacherAndRead = function(s) {
        self.teacherDevice = s;
        Materialize.toast('Me conecte con el profesor', 3000, 'rounded'); 
        self.teacherDevice.prepare(self.tryRead, self.prepareError)
    };

    self.tryRead = function() {
        self.teacherDevice.rfcommRead(self.readSuccess, self.readError);
    }

    self.tryPrepare = function() {
        self.teacherDevice.prepare(self.setTryReadInterval, self.prepareError)
    };

    self.prepareError = function(message) {
        if (DEBUG) {
            Materialize.toast("error preparing teacher device intentando de nuevo",2000, 'rounded');
        }
        self.teacherDevice.prepare(self.tryRead, self.prepareError)
        console.log(message);
    };

    self.readError = function() {
        self.teacherDevice.rfcommRead(self.readSuccess, self.readError);
        if (DEBUG){
            Materialize.toast("error leyendo del canal rfcomm, intentando de nuevo.", 2000, 'rounded');
        }
    }

    self.readSuccess = function(data) {
        var d=data.value.getASCIIString();
        var e= new String("ping");
        var res= d.slice(0, 4);
        if (e.valueOf() == res.valueOf()) {
            swal("Estas Presente!", "", "success"); 
            $("#preloader-presente").hide();

            //self.teacherDevice.rfcommWrite("ascii", "ok", self.writeSuccess,self.writeError);
        } else {
            if (DEBUG) {
                Materialize.toast("Lo que lei no es mi dato jiji", 2000, 'rounded');
            }
            self.teacherDevice.rfcommRead(self.readSuccess, self.readError);}
    }

    self.writeSuccess = function() {
        Materialize.toast("Se envio la confirmación correctamente.", 2000, 'rounded');
        $("#preloader-presente").hide();
        self.teacherDevice.disconnect(self.disconnectSuccess, self.disconnectError);
    };

    self.writeError = function(){
        if (DEBUG) {
            Materialize.toast("No se pudo escribir, intentando de nuevo", 2000, 'rounded');
        }
        self.teacherDevice.rfcommWrite("ascii", "ok", function(){alert("escribi")},self.writeError());
    }

    self.disconnectSuccess = function() {
        Materialize.toast("Se desconecto del profesor correctamente.", 2000, 'rounded');
    };

    self.disconnectError = function() {
        if (DEBUG) {
            Materialize.toast("no se pudo desconectar, intentando de nuevo.", 1000, 'rounded');
        }
        self.teacherDevice.disconnect(self.disconnectSuccess, self.disconnectError);
    }

    self.debug = function() {
        console.log("hey");
    }
}
