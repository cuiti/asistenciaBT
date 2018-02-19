# Appsistencia
 
 Proyecto de Desarrollo de Aplicaciones Móviles Multiplataforma, en III-LIDI: “Appsistencia”, desarrollada con PhoneGap. Se encarga de la toma de asistencia automática mediante el uso de Bluetooth, haciendo que los dispositivos de alumnos y profesores se detecten y registren automáticamente. Fue presentada en la Expo Ciencia y Tecnología de  la facultad de Informática de la UNLP el 14/10/2015.


Para compilar usando PhoneGap por la consola, se necesita instalar:

- PhoneGap y NodeJS: http://phonegap.com/install/
- Apache Ant
- Android SDK
- ...

Para compilar después de hacer el clone

1. cordova platforms add android
2. cordova plugin add https://github.com/bcsphere/bluetooth.git
3. cordova plugin add https://github.com/wymsee/cordova-HTTP.git
4. cordova plugin add https://github.com/jlasarte/MacAddress.git
5. cordova plugin add https://github.com/jlasarte/BTPlugin.git
6. cordova plugin add cordova-plugin-network-information

