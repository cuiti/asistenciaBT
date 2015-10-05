// Wait for device API libraries to load
document.addEventListener("deviceready",onDeviceReady,false);
var currentClaseID;
// device APIs are available
function onDeviceReady() {
  $("#preload").show();
  currentClaseID = JSON.parse(localStorage.getItem("currentClaseID"));
  Server.initialize(function() { ko.applyBindings(new ClaseVM());}, function() { console.log('error :(');});
}

function internet() {
  var networkState = navigator.connection.type;
  return networkState != Connection.NONE;
}

function Alumno(data) {
  var self = this;
  self.id= data.usuario_id;
  self.nombre = data.nombre + " " + data.apellido;
  self.apellido = data.apellido;
  self.estado = ko.observable(data.estado);
  self.Ausente=ko.observable((self.estado() == 'Ausente'));
 
 self.MarcarPresente = function() {
        swal({
                title: "¿Estas seguro de marcar como presente a este alumno?",      
                type: "warning",   
                showCancelButton: true,   
                confirmButtonColor: "#DD6B55",   
                confirmButtonText: "Marcar Presente",   
                closeOnConfirm: false 
            }, 
            function(){
                    Server.pasarPresente(
                    self.id,
                    currentClaseID,
                    function(data){
                        self.estado('Presente');
                        self.Ausente(false);
                        swal("Ok", "Alumno marcado como Presente!", "success");
                    },
                    function(data){
                        alert("No se le pudo pasar presente");
                    }
                ); 
            }
        );
    };
 }


function ClaseVM() {
  var self = this;
  self.id = currentClaseID;
  self.alumnos = ko.observableArray([]);
  self.fecha = ko.observable("");

  self.getDataForClassSuccess = function(data) {
    $("#preload").hide();
    self.fecha(data.fecha);
    var mappedAlumnos = $.map(data.alumnos, function(item) { return new Alumno(item) });
    if (mappedAlumnos.length != 0){
      self.alumnos(mappedAlumnos); 
    }
  };

  self.getDataForClassFailure = function(response) {
    $("#preload").hide();
    console.error(response.error);
  }

  self.initialize = function() {
    if (internet()) {
      Server.getClaseByID(self.id,self.getDataForClassSuccess, self.getDataForClassFailure);
    } else {
      alert("Sin internet no se puede obtener el hisotial")
    }
  }

  self.initialize();
}