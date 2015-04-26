   
    // Wait for device API libraries to load
    //
    document.addEventListener("deviceready",onDeviceReady,false);

    // device APIs are available
    //
    function onDeviceReady() {
        ko.applyBindings(new AsistenciaViewModel());
    }

    function AlumnoViewModel(data) {
        var self = this;
        self.name = "";
        self.device_mac = "";
        self.present = ko.observable(false);
        
        if (data) {
            self.name = data.name;
            self.device_mac = data.device_mac;
            self.present(data.present);
        }
    }

	function AsistenciaViewModel() {
        var self = this;
        self.detectedDevices = ko.observableArray([]);
        self.alumnos = ko.observableArray([
            new AlumnoViewModel({name:"Juan Fernández", device_mac:"0:5F:2E:BD:32:DC", present: false}),
            new AlumnoViewModel({name:"Alfonso Cuitiño", device_mac : "00:08:CA:3E:D5:89", present: false}),
            new AlumnoViewModel({name:"Julia Lasarte", device_mac : "54:44:08:CA:BC:28", present: false}),
            new AlumnoViewModel({name:"Martin Couso", device_mac : "", present: false}),
        	new AlumnoViewModel({name:"Andres Pinto", device_mac : "", present: false})
        ]);
        
        self.registerStudent = function(studentDevice) {
            self.alumnos.push(studentDevice);
            self.detectedDevices.remove(studentDevice);
        };
        
        
        self.scanDevices = function() {
            BC.bluetooth.addEventListener("newdevice",self.add);
            BC.Bluetooth.OpenBluetooth(function(){alert("todo ok!");},function(){alert("bluetooth open error!");});
            BC.Bluetooth.StartScan();//start hybrid scan,in android platform the default scan strategy is scan for BLE device 5s first, then scan for classical device 12s,and restart the hybrid scan untill the BC.Bluetooth.StopScan be called. in IOS platform only start the LE scan.
	   };
	
        self.add = function(s){
        	var newDevice = s.target;	
			//funcion que busca la direccion dentro del array
            var in_students = ko.utils.arrayFirst(self.alumnos(),
                        function(item) {
                            return newDevice.deviceAddress == item.device_mac;
                        });
            
            var in_detected_devices = ko.utils.arrayFirst(self.detectedDevices(),
                        function(item) {
                            return newDevice.deviceAddress == item.device_mac;
                        });
            
            if (in_students) {
                in_students.present(true);
            } else {
                if (!in_detected_devices) {
                    self.detectedDevices.push(new AlumnoViewModel({name:newDevice.deviceName,device_mac:newDevice.deviceAddress,present:false}))
                }
            }

        }
    }
