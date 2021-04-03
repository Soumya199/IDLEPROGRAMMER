import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
@Component({
  selector: 'app-oops',
  templateUrl: './oops.component.html',
  styleUrls: ['./oops.component.css']
})
export class OopsComponent implements OnInit {

  constructor(private router:Router,private tittle:Title) { }

  ngOnInit(): void {
    this.tittle.setTitle("Oops concept in C#");
  }
  Previouspage(){
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    this.router.navigateByUrl('CSharp/array')
  }
  Nextpage(){
   document.body.scrollTop = document.documentElement.scrollTop = 0;
   this.router.navigateByUrl('CSharp/AbstractAndInterface')
  }

}
