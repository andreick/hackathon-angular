import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomConfirmDialogComponent } from './custom-confirm-dialog.component';

import { ConfirmDialogModule } from 'primeng/confirmdialog';

@NgModule({
  declarations: [CustomConfirmDialogComponent],
  imports: [
    CommonModule,
    ConfirmDialogModule
  ],
  exports: [CustomConfirmDialogComponent]
})
export class CustomConfirmDialogModule { }
