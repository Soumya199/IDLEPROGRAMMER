import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
@Component({
  selector: 'app-csharp-envirnment-set-up',
  templateUrl: './csharp-envirnment-set-up.component.html',
  styleUrls: ['./csharp-envirnment-set-up.component.css']
})
export class CSharpEnvirnmentSetUpComponent implements OnInit {

  constructor(private router:Router,private tittle:Title) { }

  ngOnInit(): void {
    this.tittle.setTitle("Envirnment setup for C#");
  }
  next(){
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    this.router.navigateByUrl('/CSharp/introductionCSharp')
  }
}
