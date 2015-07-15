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
    self.tryConnection = function() {
        self.teacherDevice.connect(self.connectionSuccess, self.connectionError, CHANEL, true);
    }

    self.connectionSuccess = function() {
       // alert("nos conectamos correctamente!!");
        // si ya nos conectamos, limpiamos el intervalo para que no siga intentando.
    }
    
    self.connectionError = function() {
        console.log("no se pudo establecer conexion", self.name, "reintentando en 2 segundos");
    };

    self.deviceFound = function(s) {
        var nD = s.target;
        if (nD.deviceAddress == self.teacher().device_mac) {
            self.teacherDevice = nD;
            self.connection_interval = setInterval(self.tryConnection, 5000);
            self.teacherDevice.addEventListener("deviceconnected", self.prepareTeacherAndRead);
        } else {
            console.log("Encontre a: "+nD.deviceName + "");
        }
    };

    self.prepareTeacherAndRead = function(s) {
        self.connectedTeacher = s;
        alert("device:" + s.deviceAddress + "is connected successfully!")
        window.clearInterval(self.connection_interval);
        //self.PrepareInterval = setInterval(self.tryPrepare,5000);
        self.tryPrepare();
    };

    self.setTryReadInterval = function() {
        window.clearInterval(self.PrepareInterval);
        self.read_interval = setInterval(self.tryRead, 5000);
    }

    self.tryRead = function() {
           self.teacherDevice.rfcommRead(self.readSuccess, self.readError);
         window.clearInterval(self.tryRead);
    }

    self.tryPrepare = function() {
        self.connectedTeacher.prepare(self.setTryReadInterval, self.prepareError)
    };

    self.prepareError = function(message) {
        console.log("error preparing teacher device intentando de nuevo en 5 segundos");
        console.log(message);
    };

    self.readError = function() {
        alert("no lei");
        //self.connectedTeacher.rfcommSubscribe(self.readSuccess);
        console.log("error leyendo del canal rfcomm, intentando de nuevo en dos segundos")
    }

    self.readSuccess = function(data) {
        var d=data.value.getASCIIString();
        var e= new String("80");
        var res= d.slice(0, 2);
        alert(data.deviceAddress); //aca sacas la mac del que escribe!
        if (e.valueOf() == res.valueOf()) {
            alert("estas Presente!");
            window.clearInterval(self.read_interval);
            //self.teacherDevice.rfcommWrite("Hex", "01", function(){alert("escribi")}, function(){alert("no escribi")});
            self.connectedTeacher.disconnect(function(){alert("me desconecté")}, function(){alert("no me desconecté")});
        } else alert("Lo que lei no es mi dato jiji");
    }

    self.debug = function() {
        console.log("hey");
    }
}