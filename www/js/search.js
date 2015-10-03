document.addEventListener("deviceready",onDeviceReady,false);

function onDeviceReady() {
  Server.initialize(function() { ko.applyBindings(new BusquedaVM());}, function() { console.log('error :(');});
}

function Curso(data) {
  var self = this;
  self.id = data.id;
  self.nombre = data.nombre;
  self.descripcion = data.descripcion;
  self.profesor = data.profesor;

  self.setAsCurrent = function(){
    window.localStorage.setItem("currentCursoID",self.id);
    window.location = "inscripcion.html";

  }
}

function BusquedaVM(){
	var self= this;
	self.busqueda= ko.observable();
	self.resultado = ko.observableArray([]);

  if (navigator.connection.type == Connection.NONE) {
    swal({   
          title: "Error",   
          text: "No se puede buscar cursos sin conexion",   
          type: "error",   showCancelButton: false,   
          confirmButtonText: "Volver",   
          closeOnConfirm: false 
        }, function(){   
            window.location = "index.html";
        }); 
  }

self.getDataSuccess = function(data) {
  	$("#preloader").hide();
    var mappedCursos = $.map(data, function(item) { return new Curso(item) });
    if (mappedCursos.length != 0){
    self.resultado(mappedCursos);}
  };
  self.getDataFailure = function(response) {
  	$("#preloader").hide();
    console.error(response.error);
  }
  self.Search=function(){
    var user_id=window.localStorage.getItem("user_id");
  	$("#preloader").show();
    Server.buscarCurso(self.busqueda(),user_id,self.getDataSuccess,self.getDataFailure);
}
}