import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { ContactService } from 'src/app/Service/contactService/contact.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  constructor(public contactus: ContactService,private tittle:Title) {
  }

  ngOnInit(): void {
    this.tittle.setTitle("Contact us ");
  }
  onSubmit(form) {
    debugger
    this.contactus.insertCustomerMessage(form.value);
    form.resetForm();
  }

}
