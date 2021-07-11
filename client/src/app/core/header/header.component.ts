import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { UserService } from 'src/app/services/user.service';
import { LoginComponent } from 'src/app/user/login/login.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {


  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver , private userService : UserService , private router : Router ) {}
  
      
  get isAuth() : Boolean { 
    return this.userService.isAuth;
  }

  logout(event) : void {
    this.userService.logout().subscribe(res => {
      sessionStorage.removeItem('logged');
      this.router.navigate(['/']);
    },
    error => console.log(error.message)
    );
  }

}
