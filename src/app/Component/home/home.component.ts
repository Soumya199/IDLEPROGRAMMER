import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { HomeviewService } from 'src/app/Service/Defaultservice/homeview.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public homeService:HomeviewService,private tittle:Title) { }
  imageslidesArray=[];
  notificationArray=[];
  VlogArray=[];
  ngOnInit(): void {
    this.imageSlider();
    this.notificationView();
    this.Vlogs();
    this.tittle.setTitle("Home")
  }

  imageSlider(){
    this.homeService.GetImageSlideUrls().subscribe(
      list=>{
        this.imageslidesArray=list.map(item=>{
          return {
            $key:item.key,
            ...item.payload.val()
          };
        });
      }
    );
  }
  notificationView(){
    this.homeService.GetNotification().subscribe(
      list=>{
        this.notificationArray=list.map(item=>{
          return {
            $key:item.key,
            ...item.payload.val()
          };
        });
      }
    );

  }

  Vlogs(){
    this.homeService.GetVlogDetails().subscribe(
      list=>{
        this.VlogArray=list.map(item=>{
          return {
            $key:item.key,
            ...item.payload.val()
          };
        });
      }
    );

  }

}
