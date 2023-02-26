import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

import { GlobalToastComponent } from './global-toast.component';

@NgModule({
  declarations: [GlobalToastComponent],
  imports: [
    CommonModule,
    ToastModule
  ],
  exports: [GlobalToastComponent],
  providers: [MessageService]
})
export class GlobalToastModule { }
