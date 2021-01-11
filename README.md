# Cordova OSTheme DarkMode


This plugin **only detects if dark (also called night) mode is enable or disable**.


### Install
```
cordova plugin add cordova-ostheme-darkmode
```

### Example
```js
darkmode.isDarkModeEnabled(
    function(res){
        //true/false
        alert("Dark Mode: "+res);
    }, function(err){
        console.err(err);
    });

```