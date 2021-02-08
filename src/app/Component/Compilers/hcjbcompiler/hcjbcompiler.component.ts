import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

  declare function setupEditor():void;
@Component({
  selector: 'app-hcjbcompiler',
  templateUrl: './hcjbcompiler.component.html',
  styleUrls: ['./hcjbcompiler.component.css']
})
export class HCJBCOMPILERComponent implements OnInit {

  constructor(private tittle:Title) { }

  ngOnInit(): void {
      setupEditor();
      // 
      this.tittle.setTitle("online Html Editor")
  }

}
