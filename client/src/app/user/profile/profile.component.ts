import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { IUser } from 'src/app/shared/interfaces/user';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user : IUser;
  isLoading : Boolean = false;
  constructor(private userService : UserService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.userService.getCurrentUser().pipe().subscribe(x => {
      this.isLoading = false;
      this.user = x;
      console.log(x);
     
    },
    err => this.isLoading = false
    )
  }

}
