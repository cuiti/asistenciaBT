// Wait for device API libraries to load
document.addEventListener("deviceready",onDeviceReady,false);
var currentCursoID = 0;
// device APIs are available
function onDeviceReady() {
  currentCursoID = localStorage.getItem("currentCursoID");
  Server.initialize(function() { ko.applyBindings(new CursoVM());}, function() { console.log('error :(');});
  Server.esprofesor(window.localStorage.getItem("user_id"),currentCursoID,function(data){
                                                                            if (data.status ==true) $("#es_docente").show();
                                                                            else $("#es_alumno").show();});

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
    self.profesor(data.profesor);
  };

  self.getDataFailure = function(response) {
    console.error(response.error);
  }
  Server.getCurso(currentCursoID,self.getDataSuccess,self.getDataFailure);
}