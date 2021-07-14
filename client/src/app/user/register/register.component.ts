import { DataSource } from '@angular/cdk/collections';
import { Component, Input, OnInit, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, timer } from 'rxjs';
import { MustMatch } from 'src/app/Validators/passwordValidator';
import { UserService } from '../../services/user.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  error: string;
  isLoading: boolean;


  constructor(private userService: UserService, private fb: FormBuilder, private router: Router) {
    this.registerForm = fb.group({
      username: ['', [Validators.required, Validators.minLength(4)], []],
      password: ['', [Validators.required, Validators.minLength(4)], []],
      rePassword: ['', [Validators.required], []],
      email: ['', [Validators.required, Validators.email, Validators.minLength(4)], []],
      phoneNumber: ['', [Validators.required, Validators.minLength(10)], []],
    }, { validator: MustMatch('password', 'rePassword') });
  }


  ngOnInit(): void {
  }


  get f() { return this.registerForm.controls; }


  registerHandler(): void {
    this.isLoading = true;
    this.submitted = true;
    if (this.registerForm.invalid) { return; }
    this.userService.register(this.registerForm.value).subscribe(res => {
      this.isLoading = false;
      this.router.navigate(['/']);
    },
      error => {
        this.isLoading = false;
        timer(3000).subscribe(x => this.error = undefined);
        this.error = error.error.message;
        console.log(this.error);
      }
    )
  }

}

