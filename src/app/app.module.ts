import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { DashboardComponent } from './components/dashboard/dashboard.component';


import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { CommonModule} from '@angular/common';

import { AuthGuard } from 'src/services/auth.guard';
import { HomeComponent } from './components/home/home.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { DisplayUsersComponent } from './components/display-users/display-users.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterservService } from './services/registerserv.service';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    LoginPageComponent,
    RegisterPageComponent,
    DisplayUsersComponent,
    UpdateUserComponent,
    AddUserComponent,
    UserDetailsComponent,
    ProfileComponent
    
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    FormsModule,
    HttpClientModule,
    CommonModule

  ],
  providers: [RegisterservService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
