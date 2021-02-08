import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
@Injectable({
  providedIn: 'root'
})
export class HomeviewService {
  iMageSlidesList: AngularFireList<any>
  notificationList:AngularFireList<any>
  VlogDetailsList:AngularFireList<any>
  constructor(private firebase: AngularFireDatabase) { }
  GetImageSlideUrls(){
    this.iMageSlidesList=this.firebase.list('eventSlides');  
    return this.iMageSlidesList.snapshotChanges();
  }
  GetNotification(){
    this.notificationList=this.firebase.list('Notification');  
    return this.notificationList.snapshotChanges();
  }
  GetVlogDetails(){
    this.VlogDetailsList=this.firebase.list('VlogPost');  
    return this.VlogDetailsList.snapshotChanges();
  }
}
