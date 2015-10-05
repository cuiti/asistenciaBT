// Wait for device API libraries to load
document.addEventListener("deviceready",onDeviceReady,false);
var currentUserID;
var profesor; 
// device APIs are available
function onDeviceReady() {
  $("#preload").show();
  currentCurso = JSON.parse(localStorage.getItem("currentCurso"));
  Server.initialize(function() { ko.applyBindings(new HistorialVM());}, function() { console.log('error :(');});
}

function internet() {
  var networkState = navigator.connection.type;
  return networkState != Connection.NONE;
}

function Clase(data) {
  var self = this;
  self.id = data.id;
  self.fecha = data.fecha;

  self.setAsCurrent = function() {
    localStorage.setItem("currentClaseID", self.id);
    window.location = "detalle_clase.html";
  }
}

function HistorialVM() {
  var self = this;
  self.clases = ko.observableArray([]);
  self.currentCursoID = currentCurso.id;
  self.currentCursoName = currentCurso.nombre;
  self.getClasesForCursoSuccess = function(data) {
    $("#preload").hide();
    var mappedCursos = $.map(data, function(item) { return new Clase(item) });
    if (mappedCursos.length != 0){
      self.clases(mappedCursos); 
    }
  };

  self.getClasesForCursoFailure = function(response) {
    $("#preload").hide();
    console.error(response.error);
  }

  self.initialize = function() {
    if (internet()) {
      Server.getClasesForCurso(self.currentCursoID,self.getClasesForCursoSuccess, self.getClasesForCursoFailure);
    } else {
      alert("Sin internet no se puede obtener el historial")
    }
  }

  self.initialize();
}