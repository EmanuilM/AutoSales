import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { IOffer } from '../interfaces/offer';
import { OffersService } from '../services/offers.service';
import { UserService } from '../services/user.service';

@Injectable()
export class OwnerGuard implements CanActivate {
  offer : IOffer;
  constructor(private userService : UserService  , private offerService  : OffersService ,private router : Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const isLogged = route.data.isLogged;
      if(isLogged !== this.userService.isAuth) { 
        this.router.navigateByUrl('/');
        return false;
      }
      const id = state.url.slice(state.url.lastIndexOf('/') + 1);
    return this.offerService.getOfferDetails(id).pipe(switchMap(x => { 
        console.log(x);
        this.offer = x;
        // return of(true);
        return this.userService.getCurrentUser()
      }),map(x => {
        if(this.offer.creator == x._id) { 
          return true;
        }
          this.router.navigateByUrl('/');
          return false;
      }))
    
  }
  
}
