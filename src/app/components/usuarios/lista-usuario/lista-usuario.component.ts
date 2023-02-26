import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { finalize } from 'rxjs/operators';

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

  usuarios$!: Observable<Usuario[]>

  loading = true

  constructor(
    private usuarioService: UsuarioService,
    private globalToastService: GlobalToastService,
    private confirmationService: ConfirmationService
  ) { }

  ngOnInit(): void {
    this.listarUsuarios()
  }

  listarUsuarios(): void {
    this.loading = true
    this.usuarios$ = this.usuarioService.listar()
      .pipe(
        finalize(() => this.loading = false)
      )
  }

  pesquisarPorNome(event: Event): void {
    const value = (event.target as HTMLInputElement).value
    this.usuarios$ = this.usuarioService.buscarPorNome(value)
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
