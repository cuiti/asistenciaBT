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
	self.inscribirEnCurso = function(id_user,id_curso,successCallBack,errorCallBack){
		var url ="http://movilesbluetooth.php.info.unlp.edu.ar/alumnos/inscribir_en_curso";
		self.successCallBack = successCallBack;
		self.errorCallBack = errorCallBack;
		cordovaHTTP.post(url,{usuario_id: id_user, curso_id: id_curso},{}, self.invokeSuccessCallback, self.invokeFailureCallback); 
	};

	self.PresenteManual =function(id_user,id_class){
	var url = "http://movilesbluetooth.php.info.unlp.edu.ar/alumnos/"+id_user+"/marcar_presente/"+clase_id+"/";
	cordovaHTTP.get(url,{id: id_user, clase_id: id_class},{},self.invokeSuccessCallback, self.invokeFailureCallback);
	}

	self.esprofesor = function(id_user, id_curso,successCallBack){
		var url = "http://movilesbluetooth.php.info.unlp.edu.ar/alumnos/"+id_user+"/es_profesor/"+id_curso;
		cordovaHTTP.get(url, {}, {}, self.invokeSuccessCallback, self.invokeFailureCallback);
	}
	self.crearClase = function (id_curso,date,time,timeEnd,successCallBack,errorCallBack){
		var url ="http://movilesbluetooth.php.info.unlp.edu.ar/cursos/generar_clase/";
		self.successCallBack = successCallBack;
		self.errorCallBack = errorCallBack;
		
		cordovaHTTP.post(url,{curso_id: id_curso, fecha: date, hora_inicio: time, hora_fin : timeEnd},{}, self.invokeSuccessCallback,self.invokeFailureCallback); 
	}; 
	self.RegistrarCurso = function(name,descri,horario,id_profe,successCallBack,errorCallBack){
		var url ="http://movilesbluetooth.php.info.unlp.edu.ar/cursos/alta";
		self.successCallBack = successCallBack;
		self.errorCallBack = errorCallBack;
		cordovaHTTP.post(url,{nombre: name,descripcion: descri, horarios:horario, usuario_id: id_profe},{}, self.invokeSuccessCallback, self.invokeFailureCallback); 
	}; 
	self.RegistrarAlumno = function(name,surname,contra,mac,nroalu,username,successCallBack,errorCallBack){
		var url ="http://movilesbluetooth.php.info.unlp.edu.ar/alumnos/registro/";
		self.successCallBack = successCallBack;
		self.errorCallBack = errorCallBack;
		cordovaHTTP.post(url,{nombre: name,apellido: surname,password: contra, legajo: nroalu, device_address: mac, username: username},{}, self.successCallBack, self.errorCallBack); 
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

	self.pasarPresente = function(alumno_id,clase_id,successCallBack,errorCallBack){
		var url = "http://movilesbluetooth.php.info.unlp.edu.ar/alumnos/"+alumno_id+"/marcar_presente/"+clase_id;
		self.successCallBack = successCallBack;
		self.errorCallBack = errorCallBack;
		cordovaHTTP.get(url,{},{}, self.invokeSuccessCallback, self.invokeFailureCallback);
	}

	self.estaPresente = function(alumno_id, clase_id, successCallBack, errorCallBack) {
		var url = "http://movilesbluetooth.php.info.unlp.edu.ar/alumnos/"+alumno_id+"/esta_presente/"+clase_id;
		self.successCallBack = successCallBack;
		self.errorCallBack = errorCallBack;
		cordovaHTTP.get(url,{},{}, self.invokeSuccessCallback, self.invokeFailureCallback);
	}

	self.getCurrentUser = function(mac, successCallBack, errorCallBack) {
		var url = "http://movilesbluetooth.php.info.unlp.edu.ar/alumnos/mac/"+mac;
		self.successCallBack = successCallBack;
		self.errorCallBack = errorCallBack;
		cordovaHTTP.get(url,{},{}, self.invokeSuccessCallback, self.invokeFailureCallback);
	}
	self.buscarCurso = function(nombre,alumno_id,successCallBack,errorCallBack){
		var url= "http://movilesbluetooth.php.info.unlp.edu.ar/cursos/buscar/"+alumno_id+"/"+nombre;
		self.successCallBack= successCallBack;
		self.errorCallBack=errorCallBack;
		cordovaHTTP.get(url,{},{},self.invokeSuccessCallback,self.invokeFailureCallback);
	}

	self.obtenerUltimaClase = function(curso_id,successCallBack,errorCallBack) {
		var url= "http://movilesbluetooth.php.info.unlp.edu.ar/cursos/"+curso_id+"/obtener_clase";
		self.successCallBack= successCallBack;
		self.errorCallBack=errorCallBack;
		cordovaHTTP.get(url,{},{},self.invokeSuccessCallback,self.invokeFailureCallback);
	}
	self.getUserbyID =function(user_id,successCallBack,errorCallBack){
		var url ="http://movilesbluetooth.php.info.unlp.edu.ar/alumnos/"+user_id;
		self.successCallBack = successCallBack;
		self.errorCallBack = errorCallBack;
		cordovaHTTP.get(url,{},{},self.invokeSuccessCallback,self.invokeFailureCallback);
	}

	self.marcarClaseCompletada = function(id_clase, successCallBack, errorCallBack){
		var url ="http://movilesbluetooth.php.info.unlp.edu.ar/cursos/marcar_completada/";
		self.successCallBack = successCallBack;
		self.errorCallBack = errorCallBack;
		cordovaHTTP.post(url,{clase_id:id_clase},{}, self.successCallBack, self.errorCallBack); 
	}; 

};

var Server = new server();