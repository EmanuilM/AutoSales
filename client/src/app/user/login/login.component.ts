import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup;
  submitted = false;
  error : string;
  isLoading : boolean;

  constructor(private fb : FormBuilder , private userService : UserService , private router : Router) {
    this.loginForm = fb.group({
      username : ['' , [Validators.required] , []],
      password : ['' , [Validators.required] , []]
    });
   }

  ngOnInit(): void {
  }

  get f () {return this.loginForm.controls};

  loginHandler() { 
    this.isLoading = true;
    const {username , password} = this.loginForm.value;
    this.submitted = true;
    if(this.loginForm.invalid) { 
      return;
    }

    this.userService.login({username , password}).subscribe(res => {
      this.isLoading = false;
      sessionStorage.setItem('logged' , 'true');
      this.router.navigate(['/']);
    },
    error => {
      this.isLoading = false;
      this.error = error.error.message;
    }
    )

  }


}
