import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup;
  submitted = false;

  constructor(private fb : FormBuilder , private userService : UserService) {
    this.loginForm = fb.group({
      username : ['' , [Validators.required] , []],
      password : ['' , [Validators.required] , []]
    });
   }

  ngOnInit(): void {
  }

  get f () {return this.loginForm.controls};

  login() { 
    const {username , password} = this.loginForm.value;
    this.submitted = true;
    if(this.loginForm.invalid) { 
      return;
    }

    this.userService.loginHandler({username , password}).subscribe(x => {
      if(x) { 
        this.userService.isAuth = true;
      }
      console.log(x);
    })

  }


}
