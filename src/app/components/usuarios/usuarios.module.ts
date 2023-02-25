import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { ListaUsuarioComponent } from './lista-usuario/lista-usuario.component';
import { FormularioUsuarioComponent } from './formulario-usuario/formulario-usuario.component';
import { InputValidationModule } from '../input-validation/input-validation.module';
import { CustomConfirmDialogModule } from '../custom-confirm-dialog/custom-confirm-dialog.module';

@NgModule({
  declarations: [ListaUsuarioComponent, FormularioUsuarioComponent],
  imports: [
    CommonModule,
    UsuariosRoutingModule,
    ReactiveFormsModule,
    InputValidationModule,
    CustomConfirmDialogModule,
    TableModule,
    ButtonModule,
    CardModule,
    InputTextModule,
    CalendarModule,
  ],
  exports: []
})
export class UsuariosModule { }
