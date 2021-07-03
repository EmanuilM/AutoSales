import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CreateComponent } from './create/create.component';
import { AppRoutingModule } from '../app-routing.module';
import { offersRoutingModule } from './offers-routing.module';



@NgModule({
  declarations: [
    CreateComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    offersRoutingModule,
  ]
})
export class OffersModule { }
