// Wait for device API libraries to load
document.addEventListener("deviceready",onDeviceReady,false);




var username = "movilesbluetooth";
var password = "3mFh5qNR";
var getCursosURL = "http://movilesbluetooth.php.info.unlp.edu.ar/cursos";
// device APIs are available
function onDeviceReady() {
	cordovaHTTP.useBasicAuth(username, password, function() {
    console.log('success!');
    ko.applyBindings(new CursosVM());
}, function() {
    console.log('error :(');
});
  
}


function Curso(data) {
  var self = this;
  self.id = data.id;
  self.nombre = data.nombre;
  self.descripcion = data.descripcion;
  self.profesor = data.profesor;

  self.setAsCurrent = function() {
    localStorage.setItem("currentCursoID", self.id);
    window.location = "curso.html";
  }
}

function CursosVM() {
  var self = this;
  self.cursos = ko.observableArray([]);

  self.getCursosSuccess = function(data) {
    var mappedCursos = $.map(data, function(item) { return new Curso(item) });
    self.cursos(mappedCursos);
  };

  self.getCursosFailure = function(response) {
    console.error(response.error);
  }

  cordovaHTTP.get(getCursosURL, {}, {}, 
    function(response) {
      self.getCursosSuccess(JSON.parse(response.data));
    }, 
    function(response) {
      self.getCursosFailure(response);
    });
}