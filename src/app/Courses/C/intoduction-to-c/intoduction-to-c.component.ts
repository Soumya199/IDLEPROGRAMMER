import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intoduction-to-c',
  templateUrl: './intoduction-to-c.component.html',
  styleUrls: ['./intoduction-to-c.component.css']
})
export class IntoductionToCComponent implements OnInit {

  constructor(private tittle:Title,private router:Router) { }

  ngOnInit(): void {
    this.tittle.setTitle("introduction to C");
  }
  Nextpage(){

    document.body.scrollTop = document.documentElement.scrollTop = 0;
   this.router.navigateByUrl('C/envirnmentSetup')
  }

}
