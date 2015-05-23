cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/io.litehelpers.cordova.sqlite/www/SQLitePlugin.js",
        "id": "io.litehelpers.cordova.sqlite.SQLitePlugin",
        "clobbers": [
            "SQLitePlugin"
        ]
    },
    {
        "file": "plugins/org.bcsphere.bluetooth/www/org.underscorejs.underscore/underscore.js",
        "id": "org.bcsphere.bluetooth.underscorejs.underscore"
    },
    {
        "file": "plugins/org.bcsphere.bluetooth/www/org.bcsphere/bc.js",
        "id": "org.bcsphere.bluetooth.bcjs"
    },
    {
        "file": "plugins/org.bcsphere.bluetooth/www/org.bcsphere.bluetooth/bluetoothapi.js",
        "id": "org.bcsphere.bluetooth.bluetoothapi",
        "merges": [
            "navigator.bluetooth"
        ]
    },
    {
        "file": "plugins/org.bcsphere.bluetooth/www/org.bluetooth.profile/proximity.js",
        "id": "org.bcsphere.bluetooth.profile.proximity",
        "merges": [
            "BC"
        ]
    },
    {
        "file": "plugins/org.bcsphere.bluetooth/www/org.bluetooth.profile/find_me.js",
        "id": "org.bcsphere.bluetooth.profile.find_me",
        "merges": [
            "BC"
        ]
    },
    {
        "file": "plugins/org.bcsphere.bluetooth/www/org.bluetooth.profile/serial_port.js",
        "id": "org.bcsphere.bluetooth.profile.serial_port",
        "merges": [
            "BC"
        ]
    },
    {
        "file": "plugins/org.bcsphere.bluetooth/www/org.bluetooth.service/battery_service.js",
        "id": "org.bcsphere.bluetooth.service.battery_service",
        "merges": [
            "BC"
        ]
    },
    {
        "file": "plugins/org.bcsphere.bluetooth/www/org.bluetooth.service/blood_pressure.js",
        "id": "org.bcsphere.bluetooth.service.blood_pressure",
        "merges": [
            "BC"
        ]
    },
    {
        "file": "plugins/org.bcsphere.bluetooth/www/org.bluetooth.service/health_thermometer.js",
        "id": "org.bcsphere.bluetooth.service.health_thermometer",
        "merges": [
            "BC"
        ]
    },
    {
        "file": "plugins/org.bcsphere.bluetooth/www/org.bluetooth.service/immediate_alert.js",
        "id": "org.bcsphere.bluetooth.service.immediate_alert",
        "merges": [
            "BC"
        ]
    },
    {
        "file": "plugins/org.bcsphere.bluetooth/www/org.bluetooth.service/link_loss.js",
        "id": "org.bcsphere.bluetooth.service.link_loss",
        "merges": [
            "BC"
        ]
    },
    {
        "file": "plugins/org.bcsphere.bluetooth/www/org.bluetooth.service/serial_port.js",
        "id": "org.bcsphere.bluetooth.service.serial_port",
        "merges": [
            "BC"
        ]
    },
    {
        "file": "plugins/org.bcsphere.bluetooth/www/org.bluetooth.service/tx_power.js",
        "id": "org.bcsphere.bluetooth.service.tx_power",
        "merges": [
            "BC"
        ]
    },
    {
        "file": "plugins/org.bcsphere.bluetooth/www/org.bcsphere.ibeacon/ibeaconapi.js",
        "id": "org.bcsphere.bluetooth.ibeacon.ibeaconapi",
        "merges": [
            "navigator.ibeacon"
        ]
    },
    {
        "file": "plugins/org.bcsphere.bluetooth/www/org.bcsphere/ibeacon.js",
        "id": "org.bcsphere.bluetooth.ibeacon",
        "merges": [
            "BC"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "io.litehelpers.cordova.sqlite": "0.7.7",
    "org.bcsphere.bluetooth": "0.5.1"
}
// BOTTOM OF METADATA
});