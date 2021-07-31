import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';
import { userRoutingModule } from './user-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { SharedModule } from '../shared/shared.module';
import { EditProfileComponent } from './edit-profile/edit-profile.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    EditProfileComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    userRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    SharedModule
  ],
})
export class UserModule { }
