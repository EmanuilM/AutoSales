import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { timer } from 'rxjs';
import { first } from 'rxjs/operators';
import { IUser } from 'src/app/shared/interfaces/user';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  editProfileFrom : FormGroup;
  currentUser;
  error : string;
  constructor(private fb : FormBuilder , private userService : UserService , private router : Router) { 
    this.editProfileFrom = fb.group({
        username : ['' , [] , []],
        email : ['' , [] , []],
        phoneNumber : ['' , [] , []],
        confirmPassword : ['' , [] , []],

    });
  }

  ngOnInit(): void {
    this.userService.getCurrentUser()
    .pipe(first())
    .subscribe(x => {
      this.editProfileFrom.patchValue(x);
      this.currentUser = x;
    });
  }

  editProfile(data) {  
    console.log(data)
    this.userService.editUserProfile(data, this.currentUser.id).subscribe(x => {
      this.router.navigate(['user/profile']);
    },
    error => { 
        timer(3000).subscribe(x => this.error = undefined);
        this.error = error.error.message;
        console.log(this.error);
    } 
    )
  }

}
