//Based on http://www.html5rocks.com/en/tutorials/webdatabase/todo/
document.addEventListener("deviceready", init, false);
//Activate :active state on device
document.addEventListener("touchstart", function() {}, false);

var app = {};
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
        tx.executeSql("CREATE TABLE IF NOT EXISTS alumnos(ID INTEGER PRIMARY KEY ASC, name TEXT, surname TEXT, legajo TEXT UNIQUE, UUID TEXT UNIQUE,username TEXT UNIQUE, password TEXT, added_on DATETIME)", []);
    });
}
      
app.addTodo = function(nombre,apellido,numero) {
    var db = app.db;
    db.transaction(function(tx) {
        var addedOn = new Date();
        tx.executeSql("INSERT INTO alumnos(name,surname,legajo,added_on) VALUES (?,?,?,?)",
                      [nombre,apellido,numero,addedOn],
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
        tx.executeSql("DELETE FROM alumnos WHERE ID=?", [id],
                      app.onSuccess,
                      app.onError);
    });
}

app.refresh = function() {
    var renderTodo = function (row) {
        return "<li>" + "<div class='todo-check'></div>" + row['name'] + row['surname'] + row['legajo']+ "<a class='button delete' href='javascript:void(0);'  onclick='app.deleteTodo(" + row.ID + ");'><p class='todo-delete'></p></a>" + "<div class='clear'></div>" + "</li>";
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
        tx.executeSql("SELECT * FROM alumnos", [], 
                      render, 
                      app.onError);
    });
}
      
function init() {
    //navigator.splashscreen.hide();
    app.openDb();
    app.createTable();
    app.refresh();
}
      
function addTodo() {
    var nombre = document.getElementById("Nombre");
    var apellido = document.getElementById("Apellido");
    var numero = document.getElementById("Legajo");

    app.addTodo(nombre.value,apellido.value,numero.value);
    
}