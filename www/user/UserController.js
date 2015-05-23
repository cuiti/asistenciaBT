//Based on http://www.html5rocks.com/en/tutorials/webdatabase/todo/
document.addEventListener("deviceready", init, false);
//Activate :active state on device
document.addEventListener("touchstart", function() {}, false);
document.write("<script type='text/javascript' src='../js/bluetooth.js'></script>");
document.write("<script type='text/javascript' src='../js/SQLitePlugin.js'></script>");


var app = {};
    usr={};
    app.db=null;
    uuid="";

app.openDb = function() {
   var dbName = "App";
   if (window.navigator.simulator === true) {
        // For debugin in simulator fallback to native SQL Lite
        console.log("Use built in SQL Lite");
        app.db = window.openDatabase(dbName, "1.0", "Cordova Demo", 200000);
    }
    else {
        app.db = window.sqlitePlugin.openDatabase(dbName);
        console.log("open DB");
    }
}

app.createTable = function() {
    var db = app.db;
    db.transaction(function(tx) {

        tx.executeSql('DROP TABLE IF EXISTS usuarios');
        tx.executeSql("CREATE TABLE IF NOT EXISTS usuarios(ID INTEGER PRIMARY KEY ASC AUTO-INCREMENT, nombre varchar(50) NOT NULL, apellido varchar(50) NOT NULL, legajo varchar(15) NULL, UUID varchar(40), nombreUsuario varchar(15), token varchar(20) NULL, added_on DATETIME)", [], function(tx, r){
            console.log("Tabla creada");
         },
         function(tx, e){
            alert("Se ha producido un error: " );
         });
    });
}
      
app.guardarEnBD = function(usr) {
    var db = app.db;
    db.transaction(function(tx) {
        var addedOn = new Date();  
        tx.executeSql("INSERT INTO usuarios(nombre,apellido,legajo,nombreUsuario,UUID,added_on) VALUES (?,?,?,?,?,?)",
                      [usr.nombre.value,usr.apellido.value,usr.legajo.value,usr.nombreUsuario.value,usr.UUID.value,addedOn], function(tx, r){
            console.log("Elemento introducido");
         },
         function(tx, e){
            console.log("Se ha producido un error: ");
         },
                      app.onSuccess,
                      app.onError);
    });
}
      
app.onError = function(tx, e) {
    console.log("Error: " + e.message);
} 
      
app.onSuccess = function(tx, r) {
    app.refresh();
}

app.refresh = function() {
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
}

 function getAllUsers(){
    app.refresh();
 } 

function getUser(){
 abrirBD();
 var db = app.db;

    db.transaction(function(tx) {
        tx.executeSql("SELECT * FROM usuarios", [], 
                      dameusuario, 
                      app.onError);
    })

    var dameusuario = function (tx,rs){
            var nombre = document.getElementById("alumnoNombre");
            var Apellido = document.getElementById("alumnoApellido");
            var UserName = document.getElementById("alumnoUsername");
            var UUID = document.getElementById("alumnoUUID");
            nombre.innerHTML=rs.rows.item(0).nombre;
            Apellido.innerHTML=rs.rows.item(0).apellido;
            UserName.innerHTML=rs.rows.item(0).nombreUsuario;
            UUID.innerHTML=rs.rows.item(0).UUID;
            console.log(rs.rows.item(0).nombre);
            console.log(rs.rows.item(0).apellido);
            console.log(rs.rows.item(0).nombreUsuario);
            console.log(rs.rows.item(0).UUID);
            console.log(nombre);
            console.log(Apellido);
            console.log(UserName);
            console.log(UUID);
    }
}
function abrirBD(){
    app.openDb();
}
function init() {
    uuid = device.uuid;
    abrirBD();
    app.createTable();
 }

function addTodo() {
   var usuario = new User(); 
    app.guardarEnBD(usuario);
   
}

function User(){
    this.nombre =  document.getElementById("Nombre");
    this.apellido = document.getElementById("Apellido")
    this.legajo = document.getElementById("Legajo")
    this.nombreUsuario =  document.getElementById("Username")
    this.UUID = uuid;
       
}