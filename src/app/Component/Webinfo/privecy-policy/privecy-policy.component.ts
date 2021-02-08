import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-privecy-policy',
  templateUrl: './privecy-policy.component.html',
  styleUrls: ['./privecy-policy.component.css']
})
export class PrivecyPolicyComponent implements OnInit {

  constructor(private tittle:Title) { }

  ngOnInit(): void {
    this.tittle.setTitle("Privacy policy");
  }

}
