import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/services/auth.guard';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';

import { RoleGuardGuard } from 'src/services/role-guard.guard';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { DisplayUsersComponent } from './components/display-users/display-users.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path:'',
    component:LoginPageComponent,
    pathMatch:'full'
  },
  {
    path:'register',
    component:RegisterPageComponent,
    pathMatch:'full'
  },
  {
    path:'dashboard',
    component:DashboardComponent,
    pathMatch:'full',
    canActivate:[AuthGuard]
  },
  {
    path:'allusers',
    component:DisplayUsersComponent,
    pathMatch:'full',
    canActivate:[AuthGuard]
  },
  {
    path:'update/:id',
    component:UpdateUserComponent,
    pathMatch:'full',
    canActivate:[AuthGuard]
  },
  {
    path:'adduser',
    component:AddUserComponent,
    pathMatch:'full',
    canActivate:[AuthGuard]
  },
  {
    path:'user/:id',
    component:UserDetailsComponent,
    pathMatch:'full',
    canActivate:[AuthGuard]
  },
  {
    path:'profile',
    component:ProfileComponent,
    pathMatch:'full',
    canActivate:[AuthGuard]
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
