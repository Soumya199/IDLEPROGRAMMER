import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUSComponent implements OnInit {

  constructor(private tittle:Title) { }

  ngOnInit(): void {
    this.tittle.setTitle("About us");
  }

}
