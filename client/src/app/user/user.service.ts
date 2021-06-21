import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  registerHandler(formData : any) : Observable<any> { 
    return this.http.post<any>('auth/register' , formData);
  }

  loginHandler(formData : any) : Observable<any> { 
    return this.http.post<any>('auth/login' , formData);
  }
}
