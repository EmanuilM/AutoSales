import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AlertComponent } from './alert/alert.component';
import { SpinnerComponent } from './spinner/spinner.component';

@NgModule({
  declarations: [
  
    AlertComponent,
      SpinnerComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
  ],
  exports : [
    AlertComponent,
    SpinnerComponent
  ]
  
})
export class SharedModule { }
