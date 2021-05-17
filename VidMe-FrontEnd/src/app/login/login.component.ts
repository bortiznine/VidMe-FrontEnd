import {UserService} from 'src/app/services/user/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public email: string;
  public password: string;

  constructor(private userService: UserService) { }

  loginUser(): void {
    const user = {email: this.email, password: this.password};
    console.log(user);
    this.userService.loginUser(user);
  }

  ngOnInit(): void {
  }

}
