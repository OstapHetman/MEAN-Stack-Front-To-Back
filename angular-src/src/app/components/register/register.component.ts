import { FlashMessagesService } from 'angular2-flash-messages';
import { ValidateService } from './../../servises/validate.service';
import { AuthService } from './../../servises/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



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


  constructor(
    private ValidateService: ValidateService, 
    private flashMessage: FlashMessagesService,
    private authService: AuthService,
    private router: Router 
  
  ) { }

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

    // Register User
    this.authService.registerUser(user).subscribe(data => {
      if(data.success){
      this.flashMessage.show('You are now registred', {cssClass: 'alert-danger', timeout: 3000});
      this.router.navigate(['/login']);  
    
    } else {
this.flashMessage.show('Something went wrong', {cssClass: 'alert-danger', timeout: 3000});
      this.router.navigate(['/register']); 
      }
    });
  }

}
