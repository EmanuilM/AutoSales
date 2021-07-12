import { DataSource } from '@angular/cdk/collections';
import { Component, Input, OnInit, Output , EventEmitter, OnChanges, SimpleChanges} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MustMatch } from 'src/app/Validators/passwordValidator';
import { UserService } from '../../services/user.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  registerForm : FormGroup;
  submitted = false;
  error : string;


  constructor(private userService : UserService , private fb : FormBuilder , private router : Router) { 
    this.registerForm = fb.group({
      username : ['' , [Validators.required , Validators.minLength(4)] , []],
      password : ['' , [Validators.required , Validators.minLength(4)] , []],
      rePassword : ['' , [Validators.required] , []],
      email : ['' , [Validators.required , Validators.email , Validators.minLength(4)] , []],
      phoneNumber : ['' , [Validators.required , Validators.minLength(10)] , []],
    } , {validator: MustMatch('password', 'rePassword')});
  }

  
  ngOnInit(): void {
  }

  
  get f () {return this.registerForm.controls;}


  registerHandler()  { 
  this.submitted = true;
    if(this.registerForm.invalid) { return; }
   this.userService.register(this.registerForm.value).subscribe(res => {
     sessionStorage.setItem('logged' , 'true')
     this.router.navigate(['/']);
   },
    error => {
      this.error = error.error.message;
      console.log(this.error);
    }
   )
 }

 }

