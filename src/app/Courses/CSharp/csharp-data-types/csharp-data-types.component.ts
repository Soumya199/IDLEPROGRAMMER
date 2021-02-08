import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
@Component({
  selector: 'app-csharp-data-types',
  templateUrl: './csharp-data-types.component.html',
  styleUrls: ['./csharp-data-types.component.css']
})
export class CSharpDataTypesComponent implements OnInit {

  constructor(private router:Router,private tittle:Title) { }

  ngOnInit(): void {
    this.tittle.setTitle("Datatypes in C#")
  }
  Previouspage(){
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    this.router.navigateByUrl('CSharp/introductionCSharp')
  }
  Nextpage(){
   document.body.scrollTop = document.documentElement.scrollTop = 0;
   this.router.navigateByUrl('CSharp/nullable')
  }
}
