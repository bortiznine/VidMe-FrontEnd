import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
const herokuUrl = 'https://frozen-island-43179.herokuapp.com';
@Injectable({
  providedIn: 'root'
})
export class VidmeService {

  constructor(private http: HttpClient) { }

  getVidMe(): any {
    const token = localStorage.getItem('token');
    const requestOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`
      }),
    };
    return this.http
      .get(`${herokuUrl}/api/vids`, requestOptions);
  }

  createVid(newVid): any {
    console.log(newVid);
    const token = localStorage.getItem('token');
    const requestOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`
      }),
    };
    return this.http
      .post(`${herokuUrl}/api/categories/`, newVid, requestOptions);
  }
}
