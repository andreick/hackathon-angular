import { Component, OnInit } from '@angular/core';

import { ConfirmationService } from 'primeng/api';

import { Usuario } from 'src/app/domain/usuario/usuario';
import { GlobalToastService } from 'src/app/service/global-toast/global-toast.service';
import { UsuarioService } from 'src/app/service/usuario/usuario.service';

@Component({
  selector: 'app-lista-usuario',
  templateUrl: './lista-usuario.component.html',
  styleUrls: ['./lista-usuario.component.css']
})
export class ListaUsuarioComponent implements OnInit {

  usuarios: Usuario[] = []

  loading = true

  colunas!: { cabecalho: string, campo: string }[]

  constructor(
    private usuarioService: UsuarioService,
    private globalToastService: GlobalToastService,
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
    this.loading = true
    this.usuarioService.listar().subscribe((usuarios) => {
      this.usuarios = usuarios
      this.loading = false
    })
  }

  pesquisarPorNome(event: Event): void {
    const value = (event.target as HTMLInputElement).value
    this.usuarioService.buscarPorNome(value).subscribe((usuarios) => this.usuarios = usuarios)
  }

  excluirUsuario(usuario: Usuario): void {
    this.confirmationService.confirm({
      message: 'Tem certeza de que deseja excluir ' + usuario.nome + '?',
      accept: () => {
        this.usuarioService.excluir(usuario.id).subscribe(() => {
          this.listarUsuarios()
          this.globalToastService.showSuccess('Usuário Excluído')
        })
      }
    })
  }
}
