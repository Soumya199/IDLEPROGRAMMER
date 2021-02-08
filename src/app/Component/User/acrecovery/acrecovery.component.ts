import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AuthserviceService } from 'src/app/Service/authservice.service';

@Component({
  selector: 'app-acrecovery',
  templateUrl: './acrecovery.component.html',
  styleUrls: ['./acrecovery.component.css']
})
export class ACRecoveryComponent implements OnInit {

  constructor(private afauth: AuthserviceService,private tittle:Title) { }
  num1:number;
  num2:number;
  num3:number
  message:string;
  alert:boolean=false;
  alertType:string;

  ngOnInit(): void {
    this.tittle.setTitle("Account recovery")
    this.num1=Math.floor((Math.random() * 100) + 1);
    this.num2=Math.floor((Math.random() * 100) + 1);
    this.num3=this.num1+this.num2;
  }
  public EmailId ; 
  public addResult;
  ResetPass(email,result)
  {
    if(this.num3!=result)
    {
      this.alert=true;
      this.alertType="danger"
      this.message="Please enter a valid sum of these numbers";
      setTimeout(() => this.alert = false, 4000);
    }
    else{
        if(this.afauth.sendPasswordResetEmail(email))
        {
          this.alert=true;
          this.alertType="success"
          this.message="We have sent a password reset link to your email Id Please Check and reset Password";
          setTimeout(() => this.alert = false, 4000);
        }

    }
  } 
  // SendingVarificationEmail(email,result)
  // {
  //   if(this.num3!=result)
  //   {
  //     this.alert=true;
  //     this.alertType="danger"
  //     this.message="Please enter a valid sum of these numbers";
  //   }
  //   else{
      
  //   }
  // }
}
