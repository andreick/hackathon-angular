import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableModule } from 'primeng/table';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { ListaUsuarioComponent } from './lista-usuario/lista-usuario.component';

@NgModule({
  declarations: [ListaUsuarioComponent],
  imports: [
    CommonModule,
    UsuariosRoutingModule,
    TableModule,
  ],
  exports: [
    ListaUsuarioComponent
  ]
})
export class UsuariosModule { }
