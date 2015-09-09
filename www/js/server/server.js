var DEBUG  = false;
var username = "movilesbluetooth";
var password = "3mFh5qNR";

function server() {
	var self = this;

	self.successCallBack = null;
	self.errorCallBack = null;

	self.initialize = function(successCallBack, errorCallBack) {
		cordovaHTTP.useBasicAuth(username, password, successCallBack, errorCallBack);
	};

	self.invokeSuccessCallback = function(response) {
		self.successCallBack(JSON.parse(response.data));
	}

	self.invokeFailureCallback = function(response) {
		self.errorCallBack(response);
	}
	self.esprofesor = function(id_user, id_curso,successCallBack){
		var url = "http://movilesbluetooth.php.info.unlp.edu.ar/alumnos/"+id_user+"/es_profesor/"+id_curso;
		cordovaHTTP.get(url, {}, {}, self.invokeSuccessCallback, self.invokeFailureCallback);
	}

	self.RegistrarAlumno = function(name,surname,contra,mac,nroalu,username,successCallBack,errorCallBack){
		var url ="http://movilesbluetooth.php.info.unlp.edu.ar/alumnos/registro/";
		self.successCallBack = successCallBack;
		self.errorCallBack = errorCallBack;

		//cordovaHTTP.post(url,{nombre: name,apellido: surname,password: contra, legajo: nroalu, device_address: mac, nombreusuario: username},{}, self.invokeSuccessCallback,self.invokeFailureCallback);
		cordovaHTTP.post(url,{nombre: name,apellido: surname,password: contra, legajo: nroalu, device_address: mac, nombreusuario: username},{}, function(response) {
    // prints 200
    alert(response.status);
    try {
        response.data = JSON.parse(response.data);
        // prints test
        alert(response.data.id);
        alert(response.data.message);
    } catch(e) {
        alert("JSON parsing error");
    }
}, function(response) {
    // prints 403
    alert(response.status);

    //prints Permission denied 
    alert(response.error);
}); 
	}; 

	self.getCursosById = function(id_user,successCallBack, errorCallBack) { //cursos donde el usuario es estudiante
		var url = "http://movilesbluetooth.php.info.unlp.edu.ar/alumnos/"+id_user+"/cursos";
		self.successCallBack = successCallBack;
		self.errorCallBack = errorCallBack;
		cordovaHTTP.get(url, {}, {}, self.invokeSuccessCallback, self.invokeFailureCallback);
	};

	self.getCursosDocente = function(id, successCallBack, errorCallBack) {
		var url = "http://movilesbluetooth.php.info.unlp.edu.ar/alumnos/"+id+"/profesor";
		self.successCallBack = successCallBack;
		self.errorCallBack = errorCallBack;
		cordovaHTTP.get(url, {}, {}, self.invokeSuccessCallback, self.invokeFailureCallback);
	};

	self.getCursos = function(successCallBack, errorCallBack) {
		var url = "http://movilesbluetooth.php.info.unlp.edu.ar/cursos";
		self.successCallBack = successCallBack;
		self.errorCallBack = errorCallBack;
		cordovaHTTP.get(url, {}, {}, self.invokeSuccessCallback, self.invokeFailureCallback);
	};

	self.getCurso = function(id, successCallBack, errorCallBack) {
		var url = "http://movilesbluetooth.php.info.unlp.edu.ar/cursos/"+id;
		self.successCallBack = successCallBack;
		self.errorCallBack = errorCallBack;
		cordovaHTTP.get(url, {}, {}, self.invokeSuccessCallback, self.invokeFailureCallback);
	};
};

var Server = new server();