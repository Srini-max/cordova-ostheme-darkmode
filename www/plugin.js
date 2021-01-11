
cordova.addConstructor(function() {
    function GetOSTheme() {

    }
    GetOSTheme.prototype.darkmode = function(  successCallback, errorCallback ){
        cordova.exec(successCallback, errorCallback, "GetOSTheme", "darkmode", []);
    }
	GetOSTheme.prototype.inversion = function(  successCallback, errorCallback ){
        cordova.exec(successCallback, errorCallback, "GetOSTheme", "inversion", []);
    }   
    window.GetOSTheme = new GetOSTheme()
    return window.GetOSTheme
});
