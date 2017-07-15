import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/src/app/components/navbar/navbar.component';
import { LoginComponent } from './components/src/app/components/login/login.component';
import { RegisterComponent } from './components/src/app/components/register/register.component';
import { HomeComponent } from './components/src/app/components/home/home.component';
import { DashboardComponent } from './components/src/app/components/dashboard/dashboard.component';
import { ProfileComponent } from './components/src/app/components/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DashboardComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
