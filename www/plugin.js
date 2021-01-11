module.exports = {
    darkmode: function (successCallback, errorCallback) {
        cordova.exec(successCallback, errorCallback, "GetOSTheme", "darkmode", []);
    },
    inversion: function (successCallback, errorCallback) {
        cordova.exec(successCallback, errorCallback, "GetOSTheme", "inversion", []);
    }	
};