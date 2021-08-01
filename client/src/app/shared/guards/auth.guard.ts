import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable()
export class AuthGuard implements CanActivate , CanActivateChild{
  constructor(private userService : UserService , private router : Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const isLogged = route.data.isLogged;
      if(isLogged === this.userService.isAuth) { 
        return true;
      }else { 
        this.router.navigateByUrl('/');
        return false;
      }
  }


  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const isLogged = route.data.isLogged;
      if(isLogged === this.userService.isAuth) { 
        return true;
      }else { 
        this.router.navigateByUrl('/');
        return false;
      }
  }


}
