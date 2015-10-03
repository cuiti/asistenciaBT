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
  self.profesorNombre =ko.observable();
  
  self.getTeacherSuccess =function (data){
    self.profesorNombre(data.apellido+", "+data.nombre);
   }
  self.inscripcion=function(){
    var usuario=localStorage.getItem("user_id");
    var curso=localStorage.getItem("currentCursoID");
    Server.inscribirEnCurso(usuario,curso,
      function(data){
        swal({   
          title: "Te inscribiste en el curso!",   
          text: "Te inscribiste en el curso " + self.nombre(),   
          type: "success",   showCancelButton: false,   
          confirmButtonText: "Ok",   
          closeOnConfirm: false 
        }, function(){   
                window.location = "cursos.html";

        });   
      }, 
      function(response){});
  }


  self.getDataSuccess = function(data) {
    self.id(data.id)
    self.nombre(data.nombre);
    self.descripcion(data.descripcion);
    self.profesor(data.id_profesor);
    Server.getUserbyID(self.profesor(),self.getTeacherSuccess,function(){});
    if (self.profesor() == currentUserID) $("#es_docente").show();
    else {$("#es_alumno").show();}
    window.localStorage.setItem("currentCurso_Name",self.nombre());   
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