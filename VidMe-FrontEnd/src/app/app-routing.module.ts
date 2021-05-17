import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { VidmelibraryComponent } from './vidmelibrary/vidmelibrary.component';
import { SignupComponent } from './signup/signup.component';
import {HomeComponent} from './home/home.component';
import { LogoutComponent} from './logout/logout.component';

const routes: Routes = [
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'vidmelibrary',
    component: VidmelibraryComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'logout',
    component: LogoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
