//Based on http://www.html5rocks.com/en/tutorials/webdatabase/todo/
document.addEventListener("deviceready", init, false);
//Activate :active state on device
document.addEventListener("touchstart", function() {}, false);

var app = {};
    usr={};
    app.db = null;

app.openDb = function() {
   var dbName = "App";
   if (window.navigator.simulator === true) {
        // For debugin in simulator fallback to native SQL Lite
        console.log("Use built in SQL Lite");
        app.db = window.openDatabase(dbName, "1.0", "Cordova Demo", 200000);
    }
    else {
        app.db = window.sqlitePlugin.openDatabase(dbName);
    }
}
      
app.createTable = function() {
    var db = app.db;
    db.transaction(function(tx) {
        tx.executeSql("CREATE TABLE IF NOT EXISTS usuarios(ID INTEGER PRIMARY KEY ASC AUTO-INCREMENT, name varchar(50) NOT NULL, surname varchar(50) NOT NULL, legajo varchar(15) NULL, UUID varchar(40),username varchar(15), password PASSWORD, token varchar(20) NULL, added_on DATETIME)", []);
    });
}
      
app.addTodo = function(usr) {
    var db = app.db;
    db.transaction(function(tx) {
        var addedOn = new Date();
        tx.executeSql("INSERT INTO usuarios(name,surname,legajo,username,password,token,added_on) VALUES (?,?,?,?,?,?,?)",
                      [usr.nombre,usr.surname,usr.numero,usr.username,usr.password,usr.token,addedOn],
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
      
app.deleteTodo = function(id) {
    var db = app.db;
    db.transaction(function(tx) {
        tx.executeSql("DELETE FROM usuarios WHERE ID=?", [id],
                      app.onSuccess,
                      app.onError);
    });
}

app.refresh = function() {
    var renderTodo = function (row) {
        return "<li>" + "<div class='todo-check'></div>" + row['name'] +"\n"+ row['surname'] ;"<a class='button delete' href='javascript:void(0);'  onclick='app.deleteTodo(" + row.ID + ");'><p class='todo-delete'></p></a>" + "<div class='clear'></div>" + "</li>";
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
function getUser(id){
       var renderTodo = function (row) {
        return row['name'] +"\n"+ row['surname'] ;
    }
    var render = function (tx, rs) {
        var rowOutput = "";
        var todoItems = document.getElementById("alumnosItems");
        rowOutput = renderTodo(rs.rows.item(id));
        }
      
        todoItems.innerHTML = rowOutput;
    
 var db = app.db;
    db.transaction(function(tx) {
        tx.executeSql("SELECT * FROM usuarios where ID=?", [id], 
                      render, 
                      app.onError);
    });   

}

function init() {
    //navigator.splashscreen.hide();
    app.openDb();
    app.createTable();
}

function addTodo() {
   var usuario = usr;
   usuario ={nombre : document.getElementById("Nombre"),
        surname: document.getElementById("Apellido"),
        numero : document.getElementById("Legajo"),
        username : document.getElementById("Username"),
        password : document.getElementById("Password")}
    app.addTodo(usuario);
    
}