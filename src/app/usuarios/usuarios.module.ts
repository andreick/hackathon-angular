import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { ListaUsuarioComponent } from './lista-usuario/lista-usuario.component';
import { FormularioUsuarioComponent } from './formulario-usuario/formulario-usuario.component';

@NgModule({
  declarations: [ListaUsuarioComponent, FormularioUsuarioComponent],
  imports: [
    CommonModule,
    UsuariosRoutingModule,
    ReactiveFormsModule,
    TableModule,
    ButtonModule,
    CardModule,
    InputTextModule,
    CalendarModule,
    ConfirmDialogModule,
    ToastModule,
  ],
  exports: [
    ListaUsuarioComponent
  ]
})
export class UsuariosModule { }
