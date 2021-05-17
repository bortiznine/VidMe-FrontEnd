import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Subject} from 'rxjs';
import {Router} from '@angular/router';

const herokuUrl = 'https://frozen-island-43179.herokuapp.com';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  currentUser: string;  // ADD THIS
  searchSubject = new Subject();  // ADD THIS
  constructor(private http: HttpClient, private router: Router) {
    console.log('user service loaded');
  }

  registerUser(newUser): void {
    console.log(newUser);
    this.http
      .post(`${herokuUrl}/auth/users/register`, newUser)
      .subscribe(response => console.log(response), err => console.log(err));
  }

  loginUser(user): void {
    console.log(user);
    this.http
      .post(`${herokuUrl}/auth/users/login`, user)
      .subscribe(response => {
        const token = response['jwt'];
        localStorage.setItem('currentUser', `${user.email}`);
        localStorage.setItem('token', `${token}`);
        console.log(response, token);
        this.currentUser = user.email;
        this.searchSubject.next(this.currentUser);
        this.router.navigate(['/categories']);
      }, err => console.log(err));
  }

  logoutUser(): void {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('token');
    this.currentUser = '';
    this.router.navigate(['/login']);
  }
}
