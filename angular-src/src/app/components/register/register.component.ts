import { FlashMessagesService } from 'angular2-flash-messages';
import { ValidateService } from './../../servises/validate.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name: String;
  username: String;
  email: String;
  password: String;


  constructor(private ValidateService: ValidateService, private flashMessage: FlashMessagesService) { }

  ngOnInit() {
  }

  onRegisterSubmit() {
    const user = {
      name: this.name,
      email: this.email,
      username: this.username,
      password: this.password
    }

    // Required Fields
    if(!this.ValidateService.ValidateRegister(user)){
       this.flashMessage.show('Please fill fields', {cssClass: 'alert-danger', timeout: 3000});
      return false;
    }

    if(!this.ValidateService.ValidateEmail(user.email)){
      this.flashMessage.show('Please use a valid email', {cssClass: 'alert-danger', timeout: 3000});
      return false;
    }
  }

}
