import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
@Component({
  selector: 'app-csharp-introduction',
  templateUrl: './csharp-introduction.component.html',
  styleUrls: ['./csharp-introduction.component.css']
})
export class CSharpIntroductionComponent implements OnInit {

  constructor(private router:Router,private tittle:Title) { }

  ngOnInit(): void {
    this.tittle.setTitle("Introduction to C#");

  }
  Previous(){
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    this.router.navigateByUrl('CSharp/envirnmentsetup')
  }
  Next(){
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    this.router.navigateByUrl('CSharp/datatypesInCsharp')
  }
}
