//
//  ZoomManager.h
//  ZoomExampleRN
//
//  Created by Stefan Majiros on 12/20/20.
//

#import <Foundation/Foundation.h>

@interface ZoomManager : NSObject

+ (ZoomManager *)sharedInstance;

- (NSString*) requestZAK: (NSString*)userId withJwtAccessToken:(NSString*)jwtAccessToken withJwtApiKey:(NSString*)jwtApiKey;

@end

