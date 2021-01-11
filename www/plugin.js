cordova.addConstructor(function() {
    function GetOSTheme() {

    }

    GetOSTheme.prototype.darkmode = function( base64, successCallback, errorCallback ){
        cordova.exec(successCallback, errorCallback, "GetOSTheme", "darkmode", [base64]);
    }

   
    window.GetOSTheme = new GetOSTheme()
    return window.GetOSTheme
});
