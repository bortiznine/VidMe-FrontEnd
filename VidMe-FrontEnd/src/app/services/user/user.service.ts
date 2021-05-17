import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const herokuUrl = 'https://frozen-island-43179.herokuapp.com/';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private http: HttpClient) { console.log('user service loaded'); }

  registerUser(newUser): void {
    console.log(newUser);
    return this.http
      .post(`${herokuUrl}/auth/users/register`, newUser)
  }
}
