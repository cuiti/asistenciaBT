// Wait for device API libraries to load
document.addEventListener("deviceready", onDeviceReady, false);

// device APIs are available
function onDeviceReady() {
    window.vm = new AsistenciaViewModel();
    ko.applyBindings(vm);
}

var CHANEL = "7A9C3B55-78D0-44A7-A94E-A93E3FE118CE";

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
        alert("nos conectamos correctamente!!");
    };

    self.connectionError = function() {
        console.error("No se pudo conectar con", self.device.deviceName," intentando de nuevo");
        self.device.connect(self.connectionSuccess, self.connectionError, CHANEL, true);
    };


    self.prepareStudentAndWrite = function(s) {
        self.connectedDevice = s;
        alert("device:" + s.deviceAddress + "is connected successfully!")
        self.device.prepare(self.tryWrite, self.prepareError)
    };

    self.tryWrite = function() {
        self.device.rfcommWrite("ascii","ping", self.writeSuccess, self.writeError);
    };

    self.prepareError = function(msg) {
        console.error("No se pudo preparar el dispositivo.");
        self.device.prepare(self.tryWrite, self.prepareError)
        console.log(msg);
    };


    self.writeSuccess = function() {
        Materialize.toast("Se envio la confirmación correctamente a "+self.name, 3000, 'rounded');
        self.present(true);
        self.device.disconnect(function(){alert("me desconecté")}, function(){alert("no me desconecté")});
        BC.Bluetooth.StopScan();
        window.vm.scanDevices();

    };

    self.writeError = function() {
        alert("no se pudo escribir");
        console.error("no se pudo escribir, intentando de nuevo.")
        self.device.rfcommWrite("ascii","ping", self.writeSuccess, self.writeError);
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
        console.error("No pudo abrirse el bluetooth");
    };

    self.openBTSuccess = function(message) {
        Materialize.toast('Empiezo a tomar asistencia!', 3000, 'rounded');    
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
