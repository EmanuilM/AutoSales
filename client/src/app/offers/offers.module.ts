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
import { SharedModule } from '../shared/shared.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { CoreModule } from '../core/core.module';
import { RouterModule } from '@angular/router';
import { AdvancedSearchComponent } from './advanced-search/advanced-search.component';
import { AuthGuard } from '../shared/guards/auth.guard';
import { OwnerGuard } from '../shared/guards/owner.guard';



@NgModule({
  declarations: [
    CreateComponent,
    ListComponent,
    EditComponent,
    DetailsComponent,
    AdvancedSearchComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    offersRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    SharedModule,
    InfiniteScrollModule,
    RouterModule
  ],
  providers : [AuthGuard , OwnerGuard]
})
export class OffersModule { }
