import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-abstract-interface',
  templateUrl: './abstract-interface.component.html',
  styleUrls: ['./abstract-interface.component.css']
})
export class AbstractInterfaceComponent implements OnInit {

  constructor(private tittlee:Title) { }

  ngOnInit(): void {
    this.tittlee.setTitle("Abstract and Interface in C#");
  }

}
