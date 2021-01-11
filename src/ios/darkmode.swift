@available(iOS 13, )
@objc(darkmode) class darkmode  CDVPlugin {
  @objc(darkmode)
  func darkmode(command CDVInvokedUrlCommand) {
    let isDark = UIScreen.main.traitCollection.userInterfaceStyle == .dark
    
    let pluginResult = CDVPluginResult(status CDVCommandStatus_OK, messageAsString true)
    
    self.commandDelegate!.send(pluginResult, callbackId command.callbackId)
  }
}