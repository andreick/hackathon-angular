import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfirmDialogModule } from 'primeng/confirmdialog';

import { CustomConfirmDialogComponent } from './custom-confirm-dialog.component';

@NgModule({
  declarations: [CustomConfirmDialogComponent],
  imports: [
    CommonModule,
    ConfirmDialogModule
  ],
  exports: [CustomConfirmDialogComponent]
})
export class CustomConfirmDialogModule { }
