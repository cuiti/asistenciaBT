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