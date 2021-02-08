import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AuthserviceService } from 'src/app/Service/authservice.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  constructor(private afauth: AuthserviceService, private router: Router,private tittle:Title) { }

  ngOnInit(): void {
    this.tittle.setTitle("Sign in");
    if(localStorage.getItem('loggedInstatus'))
    {
      this.router.navigate(['Home']);
    }
  }
  GoogleLogIn() {

    this.afauth.GoogleAuth().then(() => {

      if (localStorage.getItem('loggedInstatus')) {

        // this.Message=true;

        // setTimeout(() => this.Message = false, 4000);

        alert(JSON.stringify("You have succesfully loggedIn!!!!"));
        window.location.reload();
        this.router.navigate(['Home']);
      }

    });
  }
  // ***************************Method declared for facebook login*****************************

//  FacebookLogIn()

//  {

//   console.log("Hlw");

//   this.afauth.doFacebookLogin().then(()=>{

//    if(this.afauth.SignInApproved==true)

//   {
//    alert(JSON.stringify("Congatulations! You have succesfully loggedIn!!!!"));

//    this.router.navigate(['Home']);

//   }

//   });

//  }

 //***********************************************************************************************//


  LogInUser(frm) {
    this.afauth.logIn(frm.value).then(() => {
      window.location.reload();
      this.router.navigate(['Home']);
    });
  }

}
