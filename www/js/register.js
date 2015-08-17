// Wait for device API libraries to load
document.addEventListener("deviceready",onDeviceReady,false);
var username = "movilesbluetooth";
var password = "3mFh5qNR";
var checknameURL = "http://movilesbluetooth.php.info.unlp.edu.ar/alumnos/checkname/";

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
  
}

function RegisterVM() {
  var self = this;
  self.username = ko.observable();

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