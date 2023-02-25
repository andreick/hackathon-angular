import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToastModule } from 'primeng/toast';

import { ErrorToastComponent } from './error-toast.component';

@NgModule({
  declarations: [ErrorToastComponent],
  imports: [
    CommonModule,
    ToastModule,
  ],
  exports: [ErrorToastComponent]
})
export class ErrorToastModule { }
