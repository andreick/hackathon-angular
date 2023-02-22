import { Component, OnInit } from '@angular/core';

import { Usuario } from '../service/interface/usuario';
import { UsuarioService } from '../service/usuario.service';

@Component({
  selector: 'app-lista-usuario',
  templateUrl: './lista-usuario.component.html',
  styleUrls: ['./lista-usuario.component.css']
})
export class ListaUsuarioComponent implements OnInit {

  usuarios: Usuario[] = []

  colunas: { cabecalho: string, campo: string }[]

  constructor(private service: UsuarioService) { }

  ngOnInit(): void {
    this.service.listarUsuarios().subscribe((usuarios) => this.usuarios = usuarios)

    this.colunas = [
      { cabecalho: 'Id', campo: 'id' },
      { cabecalho: 'Nome', campo: 'nome' },
      { cabecalho: 'Email', campo: 'email' },
      { cabecalho: 'Data de Nascimento', campo: 'dataNascimento' }
    ];
  }

}
