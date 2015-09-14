// Wait for device API libraries to load
document.addEventListener("deviceready",onDeviceReady,false);
var currentUserID;
// device APIs are available
function onDeviceReady() {
  currentUserID = localStorage.getItem("user_id");
  $("#preload").show();
  Server.initialize(function() { ko.applyBindings(new CursosVM());}, function() { console.log('error :(');});
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
  self.cursosDocente = ko.observableArray([]);

  self.getCursosSuccess = function(data) {
    $("#preload").hide();
    var mappedCursos = $.map(data, function(item) { return new Curso(item) });
    if (mappedCursos.length != 0){
    self.cursos(mappedCursos);}
  };

  self.getCursosFailure = function(response) {
    $("#preload").hide();
    console.error(response.error);
  }

  self.getCursosDocenteSuccess = function(data) {
    $("#preload").hide();
    var mappedCursos = $.map(data, function(item) { return new Curso(item) });
    if (mappedCursos.length != 0){
    self.cursosDocente(mappedCursos);}
    Server.getCursosById(currentUserID,self.getCursosSuccess, self.getCursosFailure);
  };

  Server.getCursosDocente(currentUserID,self.getCursosDocenteSuccess, self.getCursosFailure);
}