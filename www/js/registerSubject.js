// Wait for device API libraries to load
document.addEventListener("deviceready",onDeviceReady,false);
var username = "movilesbluetooth";
var password = "3mFh5qNR";
var checknameURL = "http://movilesbluetooth.php.info.unlp.edu.ar/cursos/checkname/";

// device APIs are available
function onDeviceReady() {
  $("#name-progress").hide();
	cordovaHTTP.useBasicAuth(username, password, function() {
    console.log('success!');
    ko.applyBindings(new RegisterVM());
}, function() {
    console.log('error :(');
});
}

function RegisterVM() {
  var self = this;
  self.name = ko.observable("");
  self.teacher_id = ko.observable("");
  self.horarios=ko.observable("");
  self.descripcion = ko.observable("");

  if (navigator.connection.type == Connection.NONE) {
    swal({   
          title: "Error",   
          text: "No se puede crear cursos sin conexion",   
          type: "error",   showCancelButton: false,   
          confirmButtonText: "Volver",   
          closeOnConfirm: false 
        }, function(){   
            window.location = "index.html";
        }); 
  }
  
  self.validateName = function() {
    $("#name-progress").show();
    cordovaHTTP.get(checknameURL+self.name(), {}, {}, 
    function(response) {
      $("#name-progress").hide();
      self.getDataSuccess(JSON.parse(response.data));
    }, 
    function(response) {
      $("#name-progress").hide();
      self.getDataFailure(response);
    });
  };

  self.submitCurso =function(){
   self.teacher_id(window.localStorage.getItem("user_id"));
   Server.RegistrarCurso(self.name(),self.descripcion(),self.horarios(),self.teacher_id(),self.registerSuccess,self.registerFail);
   };

self.registerSuccess = function(response) {
      window.location = "cursos.html";

}
  
 self.registerFail=function(response){}
  
  self.getDataSuccess = function(data) {
    if (data.free) {
      $("#name").removeClass("invalid").addClass("valid");
    } else {
      $("#name").removeClass("valid").addClass("invalid");
    }
  };

  self.getDataFailure = function(response) {
    console.error(response.error);
  }
}