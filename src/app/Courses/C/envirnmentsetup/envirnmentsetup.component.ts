import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-envirnmentsetup',
  templateUrl: './envirnmentsetup.component.html',
  styleUrls: ['./envirnmentsetup.component.css']
})
export class EnvirnmentsetupComponent implements OnInit {

  constructor(private tittle:Title,private router:Router) { }

  ngOnInit(): void {
    this.tittle.setTitle("Envirnment setup for c");
  }
  Nextpage(){
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    this.router.navigateByUrl('C/DatatypesAndVariable')
  }
  Previouspage(){
    document.body.scrollTop = document.documentElement.scrollTop = 0;
   this.router.navigateByUrl('C/intoductionToc')

  }

}
