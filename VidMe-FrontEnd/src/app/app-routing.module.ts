import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { VidmelibraryComponent } from './vidmelibrary/vidmelibrary.component';
import { SignupComponent } from './signup/signup.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
