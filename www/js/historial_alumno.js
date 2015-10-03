// Wait for device API libraries to load
document.addEventListener("deviceready",onDeviceReady,false);
var currentUserID;
var profesor; 
// device APIs are available
function onDeviceReady() {
  $("#preload").show();
  currentCurso = JSON.parse(localStorage.getItem("currentCurso"));
  currentUserID = localStorage.getItem("user_id");
  Server.initialize(function() { ko.applyBindings(new HistorialVM());}, function() { console.log('error :(');});
}

function internet() {
  var networkState = navigator.connection.type;
  return networkState != Connection.NONE;
}

function Clase(data) {
  var self = this;
  self.fecha = data.fecha;
  self.estado = data.estado;
}

function HistorialVM() {
  var self = this;
  self.clases = ko.observableArray([]);
  self.currentCursoID = currentCurso.id;
  self.currentCursoName = currentCurso.nombre;

  self.getClasesForCursoSuccess = function(data) {
    $("#preload").hide();
    var mappedClases = $.map(data, function(item) { return new Clase(item) });
    if (mappedClases.length != 0){
      self.clases(mappedClases); 
    }
  };

  self.getClasesForCursoFailure = function(response) {
    $("#preload").hide();
    console.error(response.error);
  }

  self.initialize = function() {
    if (internet()) {
      Server.getAsistenciasForCurso(self.currentCursoID, currentUserID, self.getClasesForCursoSuccess, self.getClasesForCursoFailure);
    } else {
      alert("Sin internet no se puede obtener el hisotial")
    }
  }

  self.initialize();
}