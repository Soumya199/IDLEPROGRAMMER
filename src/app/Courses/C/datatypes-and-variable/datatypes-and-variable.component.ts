import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-datatypes-and-variable',
  templateUrl: './datatypes-and-variable.component.html',
  styleUrls: ['./datatypes-and-variable.component.css']
})
export class DatatypesAndVariableComponent implements OnInit {

  constructor( private tittle:Title) { }

  ngOnInit(): void {
    this.tittle.setTitle("Data Types And Variable In C")
  }

}
