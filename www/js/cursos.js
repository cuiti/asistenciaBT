// Wait for device API libraries to load
document.addEventListener("deviceready",onDeviceReady,false);
var currentUserID;
// device APIs are available
function onDeviceReady() {
  currentUserID = localStorage.getItem("user_id");
  $("#preload").show();
  Server.initialize(function() { ko.applyBindings(new CursosVM());}, function() { console.log('error :(');});
}

function internet() {
  var networkState = navigator.connection.type;
  return networkState != Connection.NONE;
}

function Curso(data) {
  var self = this;
  self.id = data.id;
  self.nombre = data.nombre;
  self.descripcion = data.descripcion;
  self.profesor = data.profesor;

  self.setAsCurrent = function() {
    localStorage.setItem("currentCursoID", self.id);
    localStorage.setItem("currentCurso", JSON.stringify(self));
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
      self.cursos(mappedCursos); 
      // faltaria ver si es la primera vez y no tiene conexion que hacemo
      window.localStorage.setItem("cursosComoAlumno",JSON.stringify(mappedCursos));
    }
  };

  self.getCursosFailure = function(response) {
    $("#preload").hide();
    console.error(response.error);
  }

  self.getCursosDocenteSuccess = function(data) {
    $("#preload").hide();
    var mappedCursos = $.map(data, function(item) { return new Curso(item) });
    if (mappedCursos.length != 0){
      self.cursosDocente(mappedCursos);
      window.localStorage.setItem("cursosComoDocente",JSON.stringify(mappedCursos));
    }
    Server.getCursosById(currentUserID,self.getCursosSuccess, self.getCursosFailure);
  };

  self.initialize = function() {
    if (internet()) {
      Server.getCursosDocente(currentUserID,self.getCursosDocenteSuccess, self.getCursosFailure);
    } else {
      $("#preload").hide();
      var cD = window.localStorage.getItem("cursosComoDocente");
      var c  = window.localStorage.getItem("cursosComoAlumno");
      cD = JSON.parse(cD);
      c  = JSON.parse(c);
      var mappedCursos = $.map(cD, function(item) { return new Curso(item) });
      var mappedCursosA = $.map(c, function(item) { return new Curso(item) });
      self.cursosDocente(mappedCursos);
      self.cursos(mappedCursosA);
    }
  }

  self.initialize();
}