import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
@Component({
  selector: 'app-array-in-csharp',
  templateUrl: './array-in-csharp.component.html',
  styleUrls: ['./array-in-csharp.component.css']
})
export class ArrayInCSharpComponent implements OnInit {

  constructor(private router:Router,private tittle:Title) { }

  ngOnInit(): void {
    this.tittle.setTitle("Array in C#");
  }
  Previouspage(){
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    this.router.navigateByUrl('CSharp/VarVsDynamic')
  }
  Nextpage(){
   document.body.scrollTop = document.documentElement.scrollTop = 0;
   this.router.navigateByUrl('CSharp/oops')
  }

}
