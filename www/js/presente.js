// Wait for device API libraries to load
document.addEventListener("deviceready", onDeviceReady, false);
var currentCursoID = 0;
var currentUserID = 0;
var CHANEL = "7A9C3B55-78D0-44A7-A94E-A93E3FE118CE";
var DEBUG = false;

// device APIs are available
function onDeviceReady() {
    $("#preloader-presente").hide();
    currentCursoID = localStorage.getItem("currentCursoID");
    currentUserID = localStorage.getItem("user_id");
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
    self.id = currentUserID;
    self.teacherDevice = null;
    self.connectedTeacher = null;
    self.PrepareInterval = null;
    self.connection_interval = null;
    self.read_interval = null;
    self.estoyPresente = false;
    self.chequearPresenteInterval = null;

    self.teacher = ko.observable(new TeacherViewModel({
       name: "cargando profesor...",
       device_mac: "..."
    }));

    
    self.getDataSuccess = function(data) {
        self.teacher(new TeacherViewModel({name: data.usuario_profesor, device_mac: data.address_profesor}));
    };

    self.getDataFailure = function(response) {
        alert.error(response.error);
    }  

    self.OpenBluetoothSuccess = function() {
        //BC.Bluetooth.RFCOMMListen("appName", CHANEL, true);
        //BC.Bluetooth.StartScan();
    };

    self.getPresenteSuccess = function(data) {
        if (data.status) {
        $("#preloader-presente").hide();
            swal("Tu asistencia fue registrada!", "", "success"); 
            self.estoyPresente = true;
            window.clearInterval(self.chequearPresenteInterval);
        } else {
            if (data.id == 1 ) {
        $("#preloader-presente").hide();
                swal("El profesor te marcó como ausente", "", "error"); 
                window.clearInterval(self.chequearPresenteInterval);
            }
        }
    }


    self.getPresenteFailure = function(data) {
        $("#preloader-presente").hide();
        alert("mugre");
    }

    self.chequearPresente = function() {
        Server.estaPresente(self.id,24,self.getPresenteSuccess, self.getPresenteFailure);
    }

    self.givePresent = function() {
        window.BTPlugin.enableVisibility(function(){alert("ajj"), function(){alert("jajaj")}});
        $("#preloader-presente").show();
        BC.Bluetooth.OpenBluetooth(self.OpenBluetoothSuccess, function() {
        alert("bluetooth open error!");});
        BC.bluetooth.addEventListener("newdevice", self.deviceFound);
        self.chequearPresenteInterval = window.setInterval(self.chequearPresente, 3000);
        
       // });
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

    self.onDataAvaliable = function(data) {
       alert(data);
    }

    self.connectionSuccess = function() {
    //self.teacherDevice.rfcommSubscribe(self.onDataAvaliable);
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
        //self.teacherDevice.rfcommSubscribe(self.onDataAvaliable);
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

    Server.getCurso(currentCursoID,self.getDataSuccess,self.getDataFailure);
}
