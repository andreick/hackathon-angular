import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToastModule } from 'primeng/toast';

import { SharedToastComponent } from './shared-toast.component';

@NgModule({
  declarations: [SharedToastComponent],
  imports: [
    CommonModule,
    ToastModule
  ],
  exports: [SharedToastComponent]
})
export class SharedToastModule { }
