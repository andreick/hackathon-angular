import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';

import { FormularioUsuario } from 'src/app/domain/usuario/formulario-usuario';
import { UsuarioService } from 'src/app/service/usuario/usuario.service';
import { GlobalToastService } from 'src/app/service/global-toast/global-toast.service';
import { getYesterday } from 'src/app/shared/get-yesterday';

@Component({
  selector: 'app-formulario-usuario',
  templateUrl: './formulario-usuario.component.html',
  styleUrls: ['./formulario-usuario.component.css']
})
export class FormularioUsuarioComponent implements OnInit {

  id?: number

  formulario!: FormGroup

  ontem: Date = getYesterday(new Date())

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router,
    private usuarioService: UsuarioService,
    private globalToast: GlobalToastService
  ) { }

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id')
    if (idParam) {
      this.id = Number(idParam)
      this.usuarioService.buscarPorId(this.id)
        .pipe(first())
        .subscribe((usuario) => {
          this.nome?.setValue(usuario.nome)
          this.email?.setValue(usuario.email)
          this.dataNascimento?.setValue(new Date(usuario.dataNascimento))
          this.formulario.removeControl('login')
          this.formulario.removeControl('senha')
        })
    }

    this.formulario = this.formBuilder.group(
      { nome: [''], email: ['', { updateOn: 'blur' }], dataNascimento: [null], login: [''], senha: [''] }
    )
  }

  get nome() { return this.formulario.get('nome') }
  get email() { return this.formulario.get('email') }
  get dataNascimento() { return this.formulario.get('dataNascimento') }
  get login() { return this.formulario.get('login') }
  get senha() { return this.formulario.get('senha') }

  enviar(): void {
    const formularioUsuario = this.formulario.value as FormularioUsuario
    let observable: Observable<any>
    let acao: string
    if (this.id) {
      observable = this.usuarioService.atualizar(this.id, formularioUsuario)
      acao = 'Atualizado'
    } else {
      observable = this.usuarioService.criar(formularioUsuario)
      acao = 'Cadastrado'
    }
    observable.subscribe(() => {
      this.globalToast.showSuccess(`Usuário ${acao}`)
      this.voltar()
    })
  }

  voltar(): void {
    this.router.navigate(['usuarios'])
  }
}
