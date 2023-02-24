import { Component, OnInit } from '@angular/core';
import { MessageService, ConfirmationService } from 'primeng/api';

import { Usuario } from '../service/interface/usuario';
import { UsuarioService } from '../service/usuario.service';

@Component({
  selector: 'app-lista-usuario',
  templateUrl: './lista-usuario.component.html',
  styleUrls: ['./lista-usuario.component.css']
})
export class ListaUsuarioComponent implements OnInit {

  usuarios: Usuario[] = []

  colunas!: { cabecalho: string, campo: string }[]

  constructor(
    private usuarioService: UsuarioService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) { }

  ngOnInit(): void {
    this.listarUsuarios()

    this.colunas = [
      { cabecalho: 'Id', campo: 'id' },
      { cabecalho: 'Nome', campo: 'nome' },
      { cabecalho: 'Email', campo: 'email' },
      { cabecalho: 'Data de Nascimento', campo: 'dataNascimento' }
    ];
  }

  listarUsuarios(): void {
    this.usuarioService.listarUsuarios().subscribe((usuarios) => this.usuarios = usuarios)
  }

  excluirUsuario(usuario: Usuario): void {
    this.confirmationService.confirm({
      message: 'Tem certeza de que deseja excluir ' + usuario.nome + '?',
      accept: () => {
        this.usuarioService.excluirUsuario(usuario.id).subscribe(() => {
          this.listarUsuarios()
          this.messageService.add({ key: 'app', severity: 'success', summary: 'Sucesso', detail: 'Usuário Excluído', life: 2000 })
        })
      }
    })
  }
}
