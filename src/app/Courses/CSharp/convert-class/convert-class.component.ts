import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-convert-class',
  templateUrl: './convert-class.component.html',
  styleUrls: ['./convert-class.component.css']
})
export class ConvertClassComponent implements OnInit {

  constructor(private tittle:Title) { }

  ngOnInit(): void {
    this.tittle.setTitle("Convert class in C#");
  }

}
