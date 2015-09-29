/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var device_address;
var EstaRegistrado;
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();

    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },

    getUserInformationFailure: function(data) {
        alert("data matata")
    },

    getUserInformationSuccess: function(data) {
        $("#preloader").hide(); 
        if (data.status) {
            $("#bienvenida").show();
            if (data.status){
                window.localStorage.setItem("esProfesor",true);
                $("#crearCurso").show(); 
            }
        }
    },

    ServerInitalizationFailure: function() {
        alert("no server");
    },

    getUserData: function() {
        var currentUserID =window.localStorage.getItem("user_id");
        Server.usuarioProfesor(currentUserID, app.getUserInformationSuccess, app.getUserInformationFailure);
    },

    CheckMacAddressOnServer: function(){
        //falta abrir el BT
        window.MacAddress.getMacAddress(
          function(macAddress) {
            device_address=macAddress;
            Server.checkMacServer(device_address,app.getMacSuccess,app.getMacFailure);
          },
          function(fail) {
            alert(fail);
          }
        );
      
  },

  setCurrentUser:function(response){
    window.localStorage.setItem("Mac",device_address);
    window.localStorage.setItem("user_id",response.id);
    $("#preloader").hide(); 
    $("#bienvenida").show();
    Server.initialize(app.getUserData,app.ServerInitalizationFailure); //se fija en el server si es profesor
    },

  CurrentUserFail:function(response){},

  getMacSuccess:function(response){
    EstaRegistrado=response.status;
    if (response.status)
        Server.getCurrentUser(device_address,app.setCurrentUser,app.CurrentUserFail);
    else {
        $("#preloader").hide();  
        location.href = "pp.html";
    }
    },
  getMacFailure: function(response){},
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        Server.initialize(function() {}, function() { console.log('error :(');});
        var networkState = navigator.connection.type;
        var esProfesor =window.localStorage.getItem("esProfesor");
        var mac = window.localStorage.getItem("Mac");
        var internet = networkState != Connection.NONE;
        if (mac == null) {
            if (internet) {
                app.CheckMacAddressOnServer();
            } else {
               alert("sin internet no hay nunca mas");
            }
        } 
        else{
            if (esProfesor == null) {
                if (internet) {
                    $("#preloader").hide(); 
                    $("#bienvenida").show();
                    Server.initialize(app.getUserData,app.ServerInitalizationFailure); //se fija en el server si es profesor
                } else {
                    alert("sin internet no hay nunca mas")
                }
            } else {
                if (esProfesor) {
                    $("#bienvenida").show();
                    $("#preloader").hide(); 
                    $("#crearCurso").show();
                }
            }
        }
    },
    // Update DOM on a Received Event
};

app.initialize();