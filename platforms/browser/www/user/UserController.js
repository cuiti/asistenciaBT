//Based on http://www.html5rocks.com/en/tutorials/webdatabase/todo/
document.addEventListener("deviceready", init, false);
 document.write("<script type='text/javascript' src='cordova.js'></script>");
//Activate :active state on device
document.addEventListener("touchstart", function() {}, false);

/*app.openDb = function() {
   if (window.navigator.simulator === true) {
        // For debugin in simulator fallback to native SQL Lite
        console.log("Use built in SQL Lite");
        app.db = window.openDatabase("App", "1.0", "Cordova Demo", 200000);
    }
    else {
        app.db = window.sqlitePlugin.openDatabase({name: "App", location: 1});

        console.log("open DB");
    }
}
*/
var db= null;

function init() {
  db = window.openDatabase({name: "App.db"});
  createTable();     
}

function createTable() {
   
    db.transaction(function(tx) {
            var stringdb = "CREATE TABLE IF NOT EXISTS usuarios("
                        +"id integer PRIMARY KEY ASC,"
                        +"nombre varchar(40) NOT NULL,"
                        +"apellido varchar(40) NOT NULL,"
                        +"legajo varchar(15),"
                        +"UUID varchar(40),"
                        +"nombreusuario varchar(15),"
                        +"added_on DATETIME)";
              tx.executeSql(stringdb, [], function (tx, r){
                                                alert("tabla creada ;)");
                                                console.log("Tabla creada");
                                                },function (tx, e){
                                                alert("Se ha producido un error: " + e.message);
                                                console.log("no se creo la tabla");
                                                });
    });
}



function guardarEnBD(usr) {
    db.transaction(function(tx) {
        var addedOn = new Date();  
        var stringdb ="INSERT INTO usuarios(nombre,apellido,legajo,nombreusuario,UUID) VALUES (?,?,?,?,?)";
        var arraydata = [usr.nombre.value,usr.apellido.value,usr.legajo.value,usr.nombreUsuario.value,"123456643",addedOn];
        alert(stringdb);
        alert(arraydata);                             
        tx.executeSql(stringdb,arraydata,function success(tx, r){
              alert("se introdujo un elemento");
              console.log("Elemento introducido");},
             function error(tx, e){
              alert("no se introdujo" +e.message);
              console.log("Se ha producido un error: ");});
    });
}
//function getUser() {}
/*           db.transaction(function(transaction) {
                transaction.executeSql("SELECT * FROM usuarios",[],
                function(tx, result) {
                      var dataLength = result.rows.length;
                       console.log(dataLength);
                        alert(dataLength);
                      if(dataLength  > 0){
                           var usuario =new User();
                           usuario.nombre = result.rows.item(0).nombre;
            console.log(usuario.nombre);
            alert(usuario.nombre)
                       }else{
                             console.log("No business found having this business id."); 
                       }
                  }, 
                  function(error) {
                        console.log("Error occurred while getting the data.");
                  });
          }); 
}*/
/*function getUser(){
    db.transaction(function(tx) {
        tx.executeSql("SELECT * FROM usuarios", [], 
                      dameusuario, 
                      app.onError);
    })

    var dameusuario = function (tx,rs){
               alert(rs.rows.item(0).nombre);
                alert(rs.rows.item(0).apellido);
    alert(rs.rows.item(0).nombreusuario);
    alert(rs.rows.item(0).uuid);
console.log(rs.rows.item(0).nombre);

console.log(rs.rows.item(0).apellido);
console.log(rs.rows.item(0).uuid);
console.log(rs.rows.item(0).nombreUsuario);
            var nombre = document.getElementById("alumnoNombre");
            var Apellido = document.getElementById("alumnoApellido");
            var UserName = document.getElementById("alumnoUsername");
            var UUID = document.getElementById("alumnoUUID");
            nombre.innerHTML=rs.rows.item(0).nombre;
            Apellido.innerHTML=rs.rows.item(0).apellido;
            UserName.innerHTML=rs.rows.item(0).nombreUsuario;
            UUID.innerHTML=rs.rows.item(0).UUID;
            
    }
}
/*

/*function imprimir() {
    var renderTodo = function (row) {
        return "<li>" + "<div class='todo-check'></div>" + row['nombre'] +"\n"+ row['apellido'] ;"<a class='button delete' href='javascript:void(0);'  onclick='app.deleteTodo(" + row.ID + ");'><p class='todo-delete'></p></a>" + "<div class='clear'></div>" + "</li>";
    }
    
    var render = function (tx, rs) {
        var rowOutput = "";
        var todoItems = document.getElementById("alumnosItems");
        for (var i = 0; i < rs.rows.length; i++) {
            rowOutput += renderTodo(rs.rows.item(i));
        }
      
        todoItems.innerHTML = rowOutput;
    }
    
    var db = app.db;
    db.transaction(function(tx) {
        tx.executeSql("SELECT * FROM usuarios", [], 
                      render, 
                      app.onError);
    });
}*/


function addTodo() {
   var usuario = new User(); 
    guardarEnBD(usuario);
    //getUser();
    return false;
    
}

function User(){
    this.nombre =  document.getElementById("Nombre");
    this.apellido = document.getElementById("Apellido");
    this.legajo = document.getElementById("Legajo");
    this.nombreUsuario =  document.getElementById("Username");
    this.UUID = "que lindo UUID (?)";  //device.uuid     
}