import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorToastComponent } from './error-toast.component';

import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [ErrorToastComponent],
  imports: [
    CommonModule,
    ToastModule,
  ],
  exports: [ErrorToastComponent]
})
export class ErrorToastModule { }
