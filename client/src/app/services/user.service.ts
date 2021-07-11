import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../shared/interfaces/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  isAuth = !!sessionStorage.getItem('logged');


  register(body : Object) : Observable<IUser> { 
    return this.http.post<IUser>('/api/auth/register' , body , {withCredentials : true});
    
  }

  login(body : Object) : Observable<IUser> { 
    return this.http.post<IUser>('/api/auth/login' , body , {withCredentials : true});
  }

  logout() : Observable<any> { 
    return this.http.get<IUser>('/api/auth/logout')
  }

  
}
