   
    // Wait for device API libraries to load
    //
 document.addEventListener("deviceready",onDeviceReady,false);
 document.write("<script type='text/javascript' src='cordova.js'></script>");

    // device APIs are available
    //
    function onDeviceReady() {
        ko.applyBindings(new AsistenciaViewModel());
    }

function getUserMac(){
    var string = window.device.uuid;
    return string;
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
        self.teachers = ko.observableArray([new AlumnoViewModel({name:"Profesor prueba", device_mac:"78:59:5E:9A:F5:E3", present: false})]);
        self.alumnos = ko.observableArray([
            new AlumnoViewModel({name:"Juan Fernández", device_mac:"00:5F:2E:BD:32:DC", present: false}),
            new AlumnoViewModel({name:"Alfonso Cuitiño", device_mac : "", present: false}),
            new AlumnoViewModel({name:"Julia Lasarte", device_mac : "54:44:08:CA:BC:28", present: false}),
        ]);

       self.searchforTeacher = function(){
            
            BC.bluetooth.addEventListener("newdevice",self.teacher);
            BC.Bluetooth.OpenBluetooth(function(){alert("ahora te lo busco");},function(){alert("bluetooth open error!");});
            
            BC.Bluetooth.StartScan();
        }; 
        
        self.teacher = function(s){
            var device = s.target;
            //funcion que busca la direccion dentro del array
            var in_teachers = ko.utils.arrayFirst(self.teachers(),
                        function(item) {
                            return device.deviceAddress == item.device_mac;
                        });
    
            
            if (in_teachers) {

                device.addEventListener("deviceconnected",function(s){alert("Connected successfully!");},function(){alert("no se conecta el puto");});
                in_teachers.present(true);
                alert("profesor presente!!!"+ device.deviceAddress + device.deviceName);
                //var deviceT = BC.bluetooth.devices[device.deviceAddress];
                device.connect(function(){alert("device is already connected well!");},function(){alert("no se conecta el puto UUID");},"7A9C3B55-78D0-44A7-A94E-A93E3FE118CE",true);
                /*device.createPair(function(mes){alert("create pair with device success!");}, function(){alert("no me parie");});
                device.prepare(function(){alert("hola todo bien prepare");},function(){alert("todo mal prepare");});
                device.discoverServices(function(){alert("hola todo bien disco");}, function(){alert("todo mal servicesdisco");});
               */ alert(device.services);
            /*for (i=0; i<device.services.length; i++){
                alert(device.services[i].name);
              alert(device.services[i].uuid);
            }*/
                //device.connect(function(){alert("device is already connected well!");},function(e){alert(e.message);});
                //device.addEventListener("devicedisconnected",function(s){alert("device:" + s.deviceAddress + "is disconnected successfully!")});
               //device.createPair(function(mes){alert("create pair with device success!")}, function(){alert("no me parie");});
               //device.createPair(function(mes){alert("create pair with device success!")});
            }
            else alert(device.deviceName);
        };

        self.registerStudent = function(studentDevice) {
            self.alumnos.push(studentDevice);
            self.detectedDevices.remove(studentDevice);
        };
        
        
        self.scanDevices = function() {
            BC.bluetooth.addEventListener("newdevice",self.add);
            BC.Bluetooth.OpenBluetooth(function(){alert("todo ok!");},function(){alert("bluetooth open error!");});
            BC.Bluetooth.StartScan();
            //start hybrid scan,in android platform the default scan strategy is scan for BLE device 5s first, then scan for classical device 12s,and restart the hybrid scan untill the BC.Bluetooth.StopScan be called. in IOS platform only start the LE scan.
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
