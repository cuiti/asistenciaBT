   
    // Wait for device API libraries to load
    //
    document.addEventListener("deviceready",onDeviceReady,false);

    // device APIs are available
    //
    function onDeviceReady() {
        ko.applyBindings(new AsistenciaViewModel());
    }
	



	function AsistenciaViewModel() {
        var self = this;

        self.alumnos = ko.observableArray([
            {name:"Julia Lasarte PC", device_mac:"20:16:D8:63:8D:D0", present: ko.observable(false)},
            {name:"Juan Fernández", device_mac:"0:5F:2E:BD:32:DC", present: ko.observable(false)},
        	{name:"Alfonso Cuitiño", device_mac : "00:08:CA:3E:D5:89", present: ko.observable(false)},
        	{name:"Julia Lasarte", device_mac : "54:44:08:CA:BC:28", present: ko.observable(false)},
        	{name:"Martin Couso", device_mac : "", present: ko.observable(false)},
        	{name:"Andres Pinto", device_mac : "", present: ko.observable(false)}
        	
        ]);
        
        self.scanDevices = function() {
            BC.bluetooth.addEventListener("newdevice",self.add);
            BC.Bluetooth.OpenBluetooth(function(){alert("todo ok!");},function(){alert("bluetooth open error!");});
            BC.Bluetooth.StartScan();//start hybrid scan,in android platform the default scan strategy is scan for BLE device 5s first, then scan for classical device 12s,and restart the hybrid scan untill the BC.Bluetooth.StopScan be called. in IOS platform only start the LE scan.
	   }
	
        self.add = function(s){
        	var newDevice = s.target;	
			//funcion que busca la direccion dentro del array
			ko.utils.arrayForEach(self.alumnos(), function(item) {
		   		if (newDevice.deviceAddress == item.device_mac) {
		   			item.present(true);
		    	}
		    });
			var newDevice = BC.bluetooth.devices[deviceAddress];
        }
    }
