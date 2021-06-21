import { DataSource } from '@angular/cdk/collections';
import { Component, Input, OnInit, Output , EventEmitter, OnChanges, SimpleChanges} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { MustMatch } from 'src/app/Validators/passwordValidator';
import { UserService } from '../user.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  registerForm : FormGroup;
  submitted = false;


  constructor(private userService : UserService , private fb : FormBuilder) { 
    this.registerForm = fb.group({
      username : ['' , [Validators.required , Validators.minLength(4)] , []],
      password : ['' , [Validators.required , Validators.minLength(4)] , []],
      rePassword : ['' , [Validators.required]],
    } , {validator: MustMatch('password', 'rePassword')});
  }

  
  ngOnInit(): void {
  }


  get f () {return this.registerForm.controls;}


 register()  { 
  const {username , password , rePassword} = this.registerForm.value;
  
  this.submitted = true;
    if(this.registerForm.invalid) { 
      return;
    }
   this.userService.registerHandler({username , password , rePassword}).subscribe(x => {
     console.log(x);
   })
 }

 }

