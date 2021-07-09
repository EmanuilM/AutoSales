import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CreateComponent } from './create/create.component';
import { AppRoutingModule } from '../app-routing.module';
import { offersRoutingModule } from './offers-routing.module';
import { ListComponent } from './list/list.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { EditComponent } from './edit/edit.component';
import { DetailsComponent } from './details/details.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TestComponent } from './test/test.component';



@NgModule({
  declarations: [
    CreateComponent,
    ListComponent,
    EditComponent,
    DetailsComponent,
    TestComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    offersRoutingModule,
    ReactiveFormsModule,
    NgbModule
  ]
})
export class OffersModule { }
