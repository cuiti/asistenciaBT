// Wait for device API libraries to load
document.addEventListener("deviceready", onDeviceReady, false);
var CHANEL = "7A9C3B55-78D0-44A7-A94E-A93E3FE118CE";

// device APIs are available
function onDeviceReady() {
    ko.applyBindings(new PresenteViewModel());
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
       //device_mac: "60:03:08:C2:E4:F7"
       //name: "SAMSUNG",
       //device_mac: "A4:9A:58:9E:3D:69"
       //name: "TLIDI2",
       //device_mac: "AC:22:0B:35:EE:4E"
       //name: "tablet viki",
       //device_mac: "96:4E:46:66:22:CB"
       name: "samsung",
       device_mac: "78:59:5E:9A:F5:E3"
    }));

    self.givePresent = function() {
        BC.bluetooth.addEventListener("newdevice", self.deviceFound);
        BC.Bluetooth.RFCOMMListen("appName", CHANEL, true);
        BC.Bluetooth.OpenBluetooth(function() {
            alert("ahora te lo busco");
        }, function() {
            alert("bluetooth open error!");
        });
        BC.Bluetooth.StartScan();
    };

    self.deviceFound = function(s) {
        var nD = s.target;
        if (nD.deviceAddress == self.teacher().device_mac) {
            self.teacherDevice = nD;
            //self.connection_interval = setInterval(self.tryConnection, 5000);
            self.teacherDevice.connect(self.connectionSuccess, self.connectionError, CHANEL, true);
            self.teacherDevice.addEventListener("deviceconnected", self.prepareTeacherAndRead);
        } else {
         console.log("Encontre a: "+nD.deviceName + "");
        }
    };

    self.connectionSuccess = function() {
      // alert("nos conectamos correctamente!!");
    }
    
    self.connectionError = function() {
        console.log("no se pudo establecer conexion", self.name, "reintentando");
        self.teacherDevice.connect(self.connectionSuccess, self.connectionError, CHANEL, true);
    };

    self.prepareTeacherAndRead = function(s) {
        self.teacherDevice = s;
        alert("device:" + s.deviceAddress + "is connected successfully!");
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
        console.log("error preparing teacher device intentando de nuevo");
        self.teacherDevice.prepare(self.tryRead, self.prepareError)
        console.log(message);
    };

    self.readError = function() {
        alert("no lei");
        self.teacherDevice.rfcommRead(self.readSuccess, self.readError);
        console.log("error leyendo del canal rfcomm, intentando de nuevo en dos segundos")
    }

    self.readSuccess = function(data) {
        var d=data.value.getASCIIString();
        var e= new String("ping");
        var res= d.slice(0, 4);
        alert(data.deviceAddress); //aca sacas la mac del que escribe!
        if (e.valueOf() == res.valueOf()) {
            
        Materialize.toast('Estas presente!!', 4000, 'rounded'); 
        alert("estas Presente!");
            self.teacherDevice.rfcommWrite("ascii", "ok", function(){alert("escribi")},self.writeError);
            self.connectedTeacher.disconnect(function(){alert("me desconecté")}, function(){alert("no me desconecté")});
        } else {alert("Lo que lei no es mi dato jiji");
                self.teacherDevice.rfcommRead(self.readSuccess, self.readError);}
    }
    self.writeError = function(){
        alert("No escribi");
        self.teacherDevice.rfcommWrite("ascii", "ok", function(){alert("escribi")},self.writeError());
    }
    self.debug = function() {
        console.log("hey");
    }
}
