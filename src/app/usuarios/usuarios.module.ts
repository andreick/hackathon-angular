import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { ListaUsuarioComponent } from './lista-usuario/lista-usuario.component';

@NgModule({
  declarations: [ListaUsuarioComponent],
  imports: [
    CommonModule,
    UsuariosRoutingModule
  ],
  exports: [
    ListaUsuarioComponent
  ]
})
export class UsuariosModule { }
