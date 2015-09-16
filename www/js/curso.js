// Wait for device API libraries to load
document.addEventListener("deviceready",onDeviceReady,false);
var currentCursoID = 2;
var user_id = 15;
// device APIs are available
function onDeviceReady() {
  currentUserID = localStorage.getItem("user_id");
  currentCursoID = localStorage.getItem("currentCursoID");
  Server.initialize(function() { ko.applyBindings(new CursoVM());}, function() { console.log('error :(');});
}

function internet() {
  var networkState = navigator.connection.type;
  return networkState != Connection.NONE;
}

function CursoVM() {
  var self = this;
  self.id = ko.observable();
  self.nombre = ko.observable();
  self.descripcion = ko.observable();
  self.profesor = ko.observable();

  self.getDataSuccess = function(data) {
    self.id(data.id)
    self.nombre(data.nombre);
    self.descripcion(data.descripcion);
    self.profesor(data.id_profesor);
    if (self.profesor() == currentUserID) $("#es_docente").show();
    else {$("#es_alumno").show();}
  };

  self.getDataFailure = function(response) {
    console.error(response.error);
  }

  self.initialize = function() {
    if (internet()) {
        Server.getCurso(currentCursoID,self.getDataSuccess,self.getDataFailure);
    } else {
      var c  = window.localStorage.getItem("currentCurso");
      c = JSON.parse(c);
      self.getDataSuccess(c);
    }
  }

  self.initialize();
}