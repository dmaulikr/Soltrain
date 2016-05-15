//
//  ProductInfoViewController.m
//  Soltrain
//
//  Created by Oliver Solano on 5/14/16.
//  Copyright © 2016 Soltrain. All rights reserved.
//

#import "ProductInfoViewController.h"
#import "RewardViewController.h"
#import "MZFormSheetPresentationViewController.h"


@interface ProductInfoViewController ()

@end

@implementation ProductInfoViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view.
}

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

-(IBAction)tappedProblemSolved:(id)sender{
    RewardViewController *rw = [[RewardViewController alloc] initWithNibName:@"RewardViewController" bundle:nil];
    
    MZFormSheetPresentationViewController *formSheetController = [[MZFormSheetPresentationViewController alloc] initWithContentViewController:rw];
    formSheetController.presentationController.contentViewSize = CGSizeMake(self.view.frame.size.width-50, 540);
    formSheetController.presentationController.shouldApplyBackgroundBlurEffect = YES;
    formSheetController.presentationController.blurEffectStyle = UIBlurEffectStyleLight;
    formSheetController.presentationController.shouldUseMotionEffect = YES;
    formSheetController.interactivePanGestureDissmisalDirection = MZFormSheetPanGestureDismissDirectionUp | MZFormSheetPanGestureDismissDirectionDown | MZFormSheetPanGestureDismissDirectionLeft | MZFormSheetPanGestureDismissDirectionRight;
    formSheetController.interactivePanGestureDissmisalDirection = MZFormSheetPanGestureDismissDirectionAll;
    formSheetController.allowDismissByPanningPresentedView = YES;
    formSheetController.contentViewControllerTransitionStyle = MZFormSheetPresentationTransitionStyleDropDown;
    [self presentViewController:formSheetController animated:YES completion:nil];

}


@end
