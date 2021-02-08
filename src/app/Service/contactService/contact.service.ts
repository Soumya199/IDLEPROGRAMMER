import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  ContactusDataList: AngularFireList<any>;
  constructor(private firebase: AngularFireDatabase) { }
  default: string = "default"
  insertCustomerMessage(contactData) {

    this.ContactusDataList = this.firebase.list('contactData');
    this.ContactusDataList.push({
      fullName: contactData.fullName,
      email: contactData.email,
      message: contactData.message,
    }).catch((error) => {
      this.default = error.message;
    }).finally(() => {
      if (this.default == "default") {
        alert(JSON.stringify("We got your response we will contact you soon!!!!"));
      }
      else {
        alert(JSON.stringify("Something went wrong, please try after sometimes!!!!"));
      }
    });
  }

}
