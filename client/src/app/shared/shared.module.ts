import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AlertComponent } from './alert/alert.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { CatalogueSpinnerComponent } from './catalogue-spinner/catalogue-spinner.component';

@NgModule({
  declarations: [
  
    AlertComponent,
      SpinnerComponent,
      CatalogueSpinnerComponent,
  ],
  imports: [
    CommonModule,
    NgbModule,
  ],
  exports : [
    AlertComponent,
    SpinnerComponent,
    CatalogueSpinnerComponent,
  ]
  
})
export class SharedModule { }
