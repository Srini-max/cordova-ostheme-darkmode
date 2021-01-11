#import "darkmode.h"
#import <Foundation/Foundation.h>

@interface darkmode () 

@property (nonatomic) CDVInvokedUrlCommand* command;

@end

@implementation darkmode
- (void)darkmode:(CDVInvokedUrlCommand*)command
{
    CDVPluginResult* pluginResult = nil;
 
    NSString* compresssedstring = [[NSAppearance currentAppearance] name];
	bool isDark = [appearanceName containsString:@"Dark"];

    if (isDark) {
        pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:@"Dark"];
    } else {
        pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR];
    }

    [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
	
}

@end