// Wait for device API libraries to load
document.addEventListener("deviceready",onDeviceReady,false);
var username = "movilesbluetooth";
var password = "3mFh5qNR";
var getCursoURL = "http://movilesbluetooth.php.info.unlp.edu.ar/cursos/";
var currentCursoID = 0;
// device APIs are available
function onDeviceReady() {
  currentCursoID = localStorage.getItem("currentCursoID");
	cordovaHTTP.useBasicAuth(username, password, function() {
    console.log('success!');
    ko.applyBindings(new CursoVM());
}, function() {
    console.log('error :(');
});
  
}

function CursoVM() {
  var self = this;
  self.id = ko.observable();
  self.nombre = ko.observable();
  self.descripccion = ko.observable();
  self.profesor = ko.observable();

  self.getDataSuccess = function(data) {
    self.id(data.id)
    self.nombre(data.nombre);
    self.descripccion(data.descripccion);
    self.profesor(data.profesor);
  };

  self.getDataFailure = function(response) {
    console.error(response.error);
  }

  cordovaHTTP.get(getCursoURL+currentCursoID, {}, {}, 
    function(response) {
      self.getDataSuccess(JSON.parse(response.data));
    }, 
    function(response) {
      self.getDataFailure(response);
    });
}