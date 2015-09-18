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
}

function BusquedaVM(){
	var self= this;
	self.busqueda= ko.observable();
	self.resultado = ko.observableArray([]);

self.getDataSuccess = function(data) {
  	$("#preloader").hide();
    var mappedCursos = $.map(data, function(item) { return new Curso(item) });
    if (mappedCursos.length != 0){
    self.resultado(mappedCursos);}
  };

  self.inscripcion=function(){
    alert("adentro de inscribir");
    localStorage.setItem("currentCursoID", self.id);
    var usuario=localStorage.getItem("user_id");
    var curso=localStorage.getItem("currentCursoID");
    alert(curso);
    alert(usuario);
    Server.inscribirEnCurso(usuario,curso,function(data){Materialize.toast('Te inscribiste en el curso', 4000);}, function(response){});
  }

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