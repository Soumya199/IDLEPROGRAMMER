import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { observable} from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.isLoggedIn());
  private UserName: BehaviorSubject<string> = new BehaviorSubject<string>(localStorage.getItem('LoggedInUserName'));
  private UserProfileImage: BehaviorSubject<string> = new BehaviorSubject<string>(localStorage.getItem('ProfileImageLink'));
  // *************************Variables declared to hold the states***********************
  ProfileName: string;
  ProfilePicture: string;
  public SignInApproved: boolean = false;
  UserDetails: any;

  // *************************Variables declared to hold the states***********************
  get isLoggesIn() {
    return this.loggedIn.asObservable();
  }

  isLoggedIn(): boolean {
    if (localStorage.getItem('loggedInstatus')) {
      return true;
    } else
      return false;
  }
  get currentUserName() {
    return this.UserName.asObservable();
  }
  get UserProfilePictureLink() {
    return this.UserProfileImage.asObservable();
  }
  constructor(public afAuth: AngularFireAuth, private router: Router) { }

  // **************************LogIN Using facebook start************************************


  // doFacebookLogin() {
  //   return new Promise<any>((resolve, reject) => {
  //     let provider = new firebase.auth.FacebookAuthProvider();
  //     this.afAuth
  //       .signInWithPopup(provider)
  //       .then(res => {
  //         this.ProfileName = res.user.displayName;
  //         this.ProfilePicture = res.user.photoURL;
  //         this.SignInApproved = true;
  //         console.log(res);
  //         //alert(JSON.stringify(res));
  //         resolve(res);

  //       }, err => {
  //         alert(JSON.stringify(err));
  //         console.log(err);
  //         reject(err);
  //       })
  //   })
  // }
  // **************************LogIN Using facebook end************************************





  // *******************SignOut from All Accounts start**************************************

  SignOutFromAllAcount() {
    this.ProfileName = null;
    this.ProfilePicture = null;
    localStorage.removeItem('loggedInstatus');
    localStorage.removeItem('LoggedInUserName');
    localStorage.removeItem('ProfileImageLink')
    return this.afAuth.signOut();//Only used for email logout
  }
  // *******************SignOut from All Accounts end**************************************






  // **************************Log In with google start******************************

  GoogleAuth() {
    return this.AuthLogin(new firebase.default.auth.GoogleAuthProvider());
  }

  // Auth logic to run auth providers
  AuthLogin(provider) {
    return this.afAuth.signInWithPopup(provider)
      .then((result) => {
        this.UserDetails = result;
        this.ProfileName = result.user.displayName;
        this.ProfilePicture = result.user.photoURL;
        localStorage.setItem('loggedInstatus', 'true');
        localStorage.setItem('LoggedInUserName', this.ProfileName);
        localStorage.setItem('ProfileImageLink', this.ProfilePicture);

      }).catch((error) => {
        alert(JSON.stringify("Something went wrong, please try after sometimes!!!!"));
      })
  }
  // **************************Log In with google end*************************************





  // ******************************Register using email Id And Password start**********************************

  // ******************************Sending Email varification link start**********************************
  SendVerificationMail() {
    return this.afAuth.currentUser.then(u => u.sendEmailVerification())
      .then(() => {
        window.alert("Hii we got your request and send you a mail with varification link please varify your email to activate your account");
        this.router.navigate(['Login']);
      })
  }
  // ******************************Sending Email varification link end**********************************
  RegisterUser(user) {
    return this.afAuth.createUserWithEmailAndPassword(user.email, user.password)
      .then((result) => {
        this.SendVerificationMail();
      }).catch((error) => {
        window.alert(error.message)
      })
  }
  // ******************************Register using email Id And Password end**********************************





  // ******************************LogIN using email Id And Password start**********************************
  logIn(user) {
    return this.afAuth.signInWithEmailAndPassword(user.email, user.password)
      .then((result) => {
        window.alert("You have been successfully Logged In!");
        this.ProfileName = result.user.email;
        localStorage.setItem('loggedInstatus', 'true');
        localStorage.setItem('LoggedInUserName', this.ProfileName);
      }).catch((error) => {
        window.alert("Invalid Credentials");
        this.router.navigate(['Login'])
      });
  }
  // ******************************LogIN using email Id And Password end**********************************
  sendPasswordResetEmail(passwordResetEmail: string) {
    return this.afAuth.sendPasswordResetEmail(passwordResetEmail);
  }

}
