import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { isTypeQueryNode } from 'typescript';
import { IUser } from '../shared/interfaces/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  get isAuth() : boolean { 
    return !!sessionStorage.getItem('logged');
  }


  register(body : Object) : Observable<IUser> { 
    return this.http.post<IUser>('/api/auth/register' , body , {withCredentials : true})
    .pipe(tap((x : IUser) => {
      sessionStorage.setItem('logged' , 'true');
    }));
    
  }

  login(body : Object) : Observable<IUser> { 
    return this.http.post<IUser>('/api/auth/login' , body , {withCredentials : true})
    .pipe(tap((x : IUser) => {
      sessionStorage.setItem('logged' , 'true');
    }));
  }

  logout() : Observable<any> { 
    return this.http.post<any>('/api/auth/logout' , {} , {withCredentials : true})
    .pipe((tap( ()=> {
      sessionStorage.removeItem('logged');
    })))
  }

  getCurrentUserData() : Observable<IUser>{
    return this.http.get<IUser>('/api/user/currentUser' , {withCredentials : true});
  }
}
