//Based on http://www.html5rocks.com/en/tutorials/webdatabase/todo/
document.addEventListener("deviceready", init, false);
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

function init() {
 var db = window.sqlitePlugin.openDatabase({name: "App.db"});
  createTable();     
}

function createTable() {
    db.transaction(function(tx) {
          tx.executeSql("CREATE TABLE IF NOT EXISTS usuarios("
                        +"id int(10) unsigned PRIMARY KEY AUTO-INCREMENT NOT NULL,"
                        +"nombre varchar(40) NOT NULL,"
                        +"apellido varchar(40) NOT NULL,"
                        +"legajo varchar(15) NULL,"
                        +"UUID varchar(40) NOT NULL,"
                        +"nombreusuario varchar(15) NOT NULL,"
                        +"added_on DATETIME)", [], function(tx, r){
                                                alert("tabla creada ;)");
                                                console.log("Tabla creada");
                                                },function(tx, e){
                                                alert("Se ha producido un error: ");
                                                console.log("no se creo la tabla");
                                                });
    });
}
      
function guardarEnBD(usr) {
   init();
    db.transaction(function(tx) {
        var addedOn = new Date();  
        alert(usr.nombre);
        alert(usr.nombre.value);
        console.log(usr.nombre);
        console.log(usr.nombre.value);
        tx.executeSql("INSERT INTO usuarios(nombre,apellido,legajo,nombreUsuario,UUID,added_on)" 
                                   +" VALUES (?,?,?,?,?,?)",
                                    [usr.nombre.value,usr.apellido.value,usr.legajo.value,usr.nombreUsuario.value,usr.UUID.value,addedOn],
                                     function(tx, r){
                                      alert("se introdujo un elemento");
                                      console.log("Elemento introducido");},
                                     function(tx, e){
                                      alert("no se introdujo");
                                      console.log("Se ha producido un error: ");});
    });
}
      
function getUser() {
          init();
           db.transaction(function(transaction) {
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
}
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
    db.transaction(guardarEnBD(usuario));
    getUser();
}

function User(){
    this.nombre =  document.getElementById("Nombre");
    this.apellido = document.getElementById("Apellido")
    this.legajo = document.getElementById("Legajo")
    this.nombreUsuario =  document.getElementById("Username")
    //this.UUID = device.uuid;       
}