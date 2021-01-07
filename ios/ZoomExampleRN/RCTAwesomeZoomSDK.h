//
//  RCTAwesomeZoomSDK.h
//  ZoomExampleRN
//
//  Created by Stefan Majiros on 12/20/20.
//

#import <React/RCTBridgeModule.h>
#import <React/RCTLog.h>

@interface RCTAwesomeZoomSDK : NSObject <RCTBridgeModule,MobileRTCMeetingServiceDelegate>

@property (nonatomic, copy) RCTPromiseResolveBlock initializePromiseResolve;
@property (nonatomic, copy) RCTPromiseRejectBlock initializePromiseReject;

@end
