import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableModule } from 'primeng/table';
import { CalendarModule } from 'primeng/calendar';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { ListaUsuarioComponent } from './lista-usuario/lista-usuario.component';
import { FormularioUsuarioComponent } from './formulario-usuario/formulario-usuario.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CustomConfirmDialogModule } from '../custom-confirm-dialog/custom-confirm-dialog.module';

@NgModule({
  declarations: [ListaUsuarioComponent, FormularioUsuarioComponent],
  imports: [
    CommonModule,
    UsuariosRoutingModule,
    SharedModule,
    CustomConfirmDialogModule,
    TableModule,
    CalendarModule,
  ],
  exports: []
})
export class UsuariosModule { }
