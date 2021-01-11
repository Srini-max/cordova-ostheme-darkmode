cordova.addConstructor(function() {
    function OSTheme() {

    }

    OSTheme.prototype.darkmode = function( base64, successCallback, errorCallback ){
        cordova.exec(successCallback, errorCallback, "OSTheme", "darkmode", [base64]);
    }

   
    window.OSTheme = new OSTheme()
    return window.OSTheme
});
