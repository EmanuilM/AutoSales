import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CreateComponent } from './create/create.component';
import { AppRoutingModule } from '../app-routing.module';
import { offersRoutingModule } from './offers-routing.module';
import { ListComponent } from './list/list.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CreateComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    offersRoutingModule,
    ReactiveFormsModule,
  ]
})
export class OffersModule { }
