import { Component, ChangeDetectionStrategy } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AuthserviceService } from 'src/app/Service/authservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class NavigationBarComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );


  constructor(private breakpointObserver: BreakpointObserver,public afauth:AuthserviceService,private router: Router) {}
// ********************Creating variables to trigger the states**********************
 isDarkTheme:boolean=false;
  Message:boolean;
  ProfilePicture:string;
  ProfileName:string;
  SignInButtonVisible=true;
  SignOutButtonVisible=false;
  SignInApproved:boolean;
  LoginStatus$ : Observable<boolean>;
  UserName$ : Observable<string>;
  ProfilePictureURL$ :Observable<string>;

//********************************************************************************** */
ngOnInit()
  {
    this.isDarkTheme=localStorage.getItem('theme')==="Dark"?true:false;  
    this.LoginStatus$ = this.afauth.isLoggesIn;
    this.UserName$ = this.afauth.currentUserName;
    this.ProfilePictureURL$=this.afauth.UserProfilePictureLink;
  }
  
  
// ****************************Storing theme selection in user localstorage*********************
  storeThemeSelection(){
    localStorage.setItem('theme',this.isDarkTheme?"Dark":"Light");
  }
  //**********************************************************************************************

  SignInRequested()
  {
    this.router.navigate(['Login'])
  }

// *************************Method used for Sign out accounts************************
signOut()

{

 this.afauth.SignOutFromAllAcount();

 this.SignInButtonVisible=true;

 this.SignOutButtonVisible=false;
 alert(JSON.stringify("You are successfully loggedOut!!"));
 window.location.reload();
 //this.ProfileName=this.afauth.ProfileName;

 //this.ProfilePicture=this.afauth.ProfilePicture;
}

//*********************************************************************************//
intro(){
  this.router.navigateByUrl('/C/intoductionToc');
}


}
