import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-var-vs-dynamic',
  templateUrl: './var-vs-dynamic.component.html',
  styleUrls: ['./var-vs-dynamic.component.css']
})
export class VarVsDynamicComponent implements OnInit {

  constructor(private router:Router,private tittle:Title) { }

  ngOnInit(): void {
    this.tittle.setTitle("Var vs dynamic in C#");
  }
  Previouspage(){
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    this.router.navigateByUrl('CSharp/nullable')
  }
  Nextpage(){
   document.body.scrollTop = document.documentElement.scrollTop = 0;
   this.router.navigateByUrl('CSharp/array')
  }
}
