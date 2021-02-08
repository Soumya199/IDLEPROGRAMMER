import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nullable',
  templateUrl: './nullable.component.html',
  styleUrls: ['./nullable.component.css']
})
export class NullableComponent implements OnInit {

  constructor(private router:Router,private tittle:Title) { }

  ngOnInit(): void {
    this.tittle.setTitle("Nullable in C#");
  }
  Previouspage(){
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    this.router.navigateByUrl('CSharp/datatypesInCsharp')
  }
  Nextpage(){
   document.body.scrollTop = document.documentElement.scrollTop = 0;
   this.router.navigateByUrl('CSharp/VarVsDynamic')
  }
}
