   
    // Wait for device API libraries to load
    //
 document.addEventListener("deviceready",onDeviceReady,false);

// device APIs are available
//
var currentCursoID;
var currentStudentID;
function onDeviceReady() {
      currentCursoID = window.localStorage.getItem("currentCursoID");
      var fecha= new Date();
      var fecha_act= fecha.getDate()+"/"+fecha.getMonth()+"/"+fecha.getFullYear();
      var hora =fecha.getHours()+":"+fecha.getMinutes()+":"+fecha.getSeconds();
      alert(fecha_act);
      alert(hora);
      Server.initialize(function() { ko.applyBindings(new AsistenciaViewModel());}, function() { console.log('error :(');});    
      Server.crearClase(currentCursoID, fecha_act,hora,"",function(data){});
}

var CHANEL = "7A9C3B55-78D0-44A7-A94E-A93E3FE118CE";
			
function getUserMac(){
    var string = window.device.uuid;
    return string;
}
    function AlumnoViewModel(data) {
        var self = this;
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
        self.currentStudentID = ko.observable();
        self.currentClassID = ko.observable();
        self.detectedDevices = ko.observableArray([]);
        self.teachers = ko.observableArray([new AlumnoViewModel({name:"Profesor prueba", device_mac:"68:A8:54:3C:2B:B2", present: false})]);
        self.alumnos = ko.observableArray([
            new AlumnoViewModel({name:"Juan Fernández", device_mac:"00:5F:2E:BD:32:DC", present: false}),
            new AlumnoViewModel({name:"Alfonso Cuitiño", device_mac : "", present: false}),
            new AlumnoViewModel({name:"Julia Lasarte", device_mac : "54:44:08:CA:BC:28", present: false})
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
                device.connect(function(){
								device.rfcommWrite("Hex","01",function(data){console.log(data);});
								//device.prepare(function(){alert("device prepared");},function(message){alert(message);});
								alert("device is already connected well!");},
							function(e){alert("no se conecta el puto UUID");console.log(e);},"7A9C3B55-78D0-44A7-A94E-A93E3FE118CE",true);
                
										
					
				/*device.createPair(function(mes){alert("create pair with device success!");}, function(){alert("no me parie");});
                device.prepare(function(){alert("hola todo bien prepare");},function(){alert("todo mal prepare");});
                device.discoverServices(function(){alert("hola todo bien disco");}, function(){alert("todo mal servicesdisco");});
               //alert(device.services);
            /*for (i=0; i<device.services.length; i++){
                alert(device.services[i].name);
              alert(device.services[i].uuid);
            }*/
                //device.connect(function(){alert("device is already connected well!");},function(e){alert(e.message);});
                //device.addEventListener("devicedisconnected",function(s){alert("device:" + s.deviceAddress + "is disconnected successfully!")});
               //device.createPair(function(mes){alert("create pair with device success!")}, function(){alert("no me parie");});
               //device.createPair(function(mes){alert("create pair with device success!")});
            }
            else alert(device.deviceAddress);
        };

        self.registerStudent = function(studentDevice) {
            self.alumnos.push(studentDevice);
            self.detectedDevices.remove(studentDevice);
        };

        self.MarcarPresente = function() {
            Server.PresenteManual(currentStudentID,currentClassID);
        };
        
        
        self.scanDevices = function() {
            BC.bluetooth.addEventListener("newdevice",self.add);
            BC.Bluetooth.RFCOMMListen("appName",CHANEL,true);
            BC.Bluetooth.OpenBluetooth(function(){alert("todo ok!");},function(){alert("bluetooth open error!");});
            BC.Bluetooth.StartScan();
	   };
	
        self.add = function(s){
        	var newDevice = s.target;	
            var in_students = ko.utils.arrayFirst(self.alumnos(),
                        function(item) {
                            return newDevice.deviceAddress.toUpperCase() == item.device_mac.toUpperCase();
                        });
            
            var in_detected_devices = ko.utils.arrayFirst(self.detectedDevices(),
                        function(item) {
                            return newDevice.deviceAddress.toUpperCase() == item.device_mac.toUpperCase();
                        });
            
            if (in_students) {
                in_students.present(true);
            } else {
                if (!in_detected_devices) {
                    var a = new AlumnoViewModel({name:newDevice.deviceName, device_mac : newDevice.deviceAddress, present: false})
                    self.detectedDevices.push(a);
                }
            }

        };

        self.connectedDevice = function(deviceObj){
            var deviceAddress = deviceObj.deviceAddress;
                alert("new device connected! it's device Address is: "+deviceAddress);
            }


        self.connectToDevice = function(d) {
            var nD = BC.bluetooth.devices[d.device_mac];
            nD.connect(
                function(){
                    console.log("ok");
                },
                function(e){
                    console.log("disconnected");
                },
                CHANEL,true);
            nD.addEventListener("deviceconnected",function(s){
                nD.prepare(function(){
                        nD.rfcommWrite("Hex","01",writeSuccess);
                
                    function writeSuccess(data){
                        alert("write success!");
                    }
                }, function(){console.log("buu");})
                alert("device:" + s.deviceAddress + "is connected successfully!")
            });
            nD.addEventListener("devicedisconnected",function(s){alert("device:" + s.deviceAddress + "is connected successfully!")});        
        };

        self.givePresent = function(d) {
            var nD = BC.bluetooth.devices[d.device_mac];
            nD.connect(
                function(){
                    console.log("ok");
                },
                function(e){
                    console.log("disconnected");
                },
                CHANEL,true);
            nD.addEventListener("deviceconnected",function(s){
                nD.prepare(function(){
                    nD.rfcommRead(readSuccess);
                    function readSuccess(data){
                        alert("Data : "+JSON.stringify(data.value)+" \n Time :"+data.date);
                    }
                }, function(){console.log("buu");})
                alert("device:" + s.deviceAddress + "is connected successfully!")
            }); 
            nD.addEventListener("devicedisconnected",function(s){alert("device:" + s.deviceAddress + "is connected successfully!")});        
        
        };

        self.debug = function() {
            console.log("hey");
        }
    }
