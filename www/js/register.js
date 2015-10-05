// Wait for device API libraries to load
document.addEventListener("deviceready",onDeviceReady,false);
var username = "movilesbluetooth";
var password = "3mFh5qNR";
var checknameURL = "http://movilesbluetooth.php.info.unlp.edu.ar/alumnos/checkname/";
var device_address = 0;
// device APIs are available
function onDeviceReady() {
  currentCursoID = localStorage.getItem("currentCursoID");
  $("#username-progress").hide();
 cordovaHTTP.useBasicAuth(username, password, function() {
    console.log('success!');
    ko.applyBindings(new RegisterVM());
}, function() {
    console.log('error :(');
});
  swal({   title: "Atencion!",   text: "Asegurate de tener el bluetooth encendido!",   imageUrl: "img/blue.png" });
   
}

function RegisterVM() {
  var self = this;
  self.username = ko.observable("");
  self.device_address = ko.observable("");
  self.first_name = ko.observable("");
  self.last_name = ko.observable("");
  self.password = ko.observable("");
  self.NroAlu =ko.observable("");

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

 self.registerSuccess = function(response) {
    try {
        response.data = JSON.parse(response.data);
        window.localStorage.setItem("user_id",response.data.id);
        window.localStorage.setItem("Mac",response.data.device_address);
        window.location = "index.html"
    } catch(e) {
        alert("JSON parsing error");
    }
  }
  
 self.registerFail=function(response){
  console.log(response);
 }
  
 self.submitAlumno =function(){
    BC.Bluetooth.OpenBluetooth(
      function(){
        window.MacAddress.getMacAddress(
          function(macAddress) {
            device_address=macAddress;
            Server.RegistrarAlumno(self.first_name(),self.last_name(),self.password(),device_address.toString(),self.NroAlu(),self.username(),self.registerSuccess,self.registerFail);
          },
          function(fail) {
            alert(fail);
          }
        )
      },
      function(){alert("fallo");});
  };

  self.validateName = function() {
    if ($("#first_name").val().length==0){
        $("#first_name").removeClass("valid").addClass("invalid"); 
    }
  };

  self.validateLastName = function() {
    if ($("#last_name").val().length==0){
        $("#last_name").removeClass("valid").addClass("invalid"); 
    }   };
  
  self.nameChanged = function() {
    $("#username-progress").show();
    cordovaHTTP.get(checknameURL+self.username(), {}, {}, 
    function(response) {
      $("#username-progress").hide();
      self.getDataSuccess(JSON.parse(response.data));
    }, 
    function(response) {
      $("#username-progress").hide();
      self.getDataFailure(response);
    });
  };

  self.getDataSuccess = function(data) {
    if (data.free) {
      $("#username").removeClass("invalid").addClass("valid");
    } else {
      $("#username").removeClass("valid").addClass("invalid");
    }
  };

  self.getDataFailure = function(response) {
    console.error(response.error);
  }
}