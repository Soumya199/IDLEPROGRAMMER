import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-first-cprogram',
  templateUrl: './first-cprogram.component.html',
  styleUrls: ['./first-cprogram.component.css']
})
export class FirstCProgramComponent implements OnInit {

  constructor(private tittle:Title,private router:Router) { }

  ngOnInit(): void {
    this.tittle.setTitle("first program in C");
  }
  Nextpage(){
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    this.router.navigateByUrl('C/FirstCprogram')
  }
  Previouspage(){
    document.body.scrollTop = document.documentElement.scrollTop = 0;
   this.router.navigateByUrl('C/envirnmentSetup')

  }


}
