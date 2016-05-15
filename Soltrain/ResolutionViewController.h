//
//  ResolutionViewController.h
//  Soltrain
//
//  Created by Oliver Solano on 5/14/16.
//  Copyright © 2016 Soltrain. All rights reserved.
//

#import <UIKit/UIKit.h>
#import <MessageUI/MessageUI.h>

@interface ResolutionViewController : UIViewController <MFMessageComposeViewControllerDelegate>

-(IBAction)didTapSendSMS:(id)sender;

@end
