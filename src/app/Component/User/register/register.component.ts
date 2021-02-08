import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AuthserviceService } from 'src/app/Service/authservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router,private afauth: AuthserviceService,private tittle:Title) { }

  num1:number;
  num2:number;
  num3:number
  message:string;
  alert:boolean=false;
  alertType:string;
  public addResult;
  ngOnInit(): void {
    this.tittle.setTitle("Register");
    if(localStorage.getItem('loggedInstatus'))
    {
      //alert(JSON.stringify("You are already loged in!!"));
      this.router.navigate(['Home']);
    }
    else{
      this.num1=Math.floor((Math.random() * 100) + 1);
    this.num2=Math.floor((Math.random() * 100) + 1);
    this.num3=this.num1+this.num2;
    }
    
  }
  CreateUser(frm)
  {
    if(this.num3!=this.addResult)
    {
      this.alert=true;
      this.alertType="danger"
      this.message="Please enter a valid sum of these numbers";
      setTimeout(() => this.alert = false, 4000);
    }
    else{
      this.afauth.RegisterUser(frm.value);
    }
    
  }

}
