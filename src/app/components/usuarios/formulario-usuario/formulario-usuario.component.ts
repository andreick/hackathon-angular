import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { FormularioUsuario } from 'src/app/domain/usuario/formulario-usuario';
import { UsuarioService } from 'src/app/service/usuario/usuario.service';
import { getYesterday } from 'src/app/utils/get-yesterday';

import { MessageService } from 'primeng/api';
import { Observable } from 'rxjs';

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
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id')
    if (idParam) {
      this.id = Number(idParam)
      this.usuarioService.buscarPorId(this.id).subscribe((usuario) => {
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
      this.messageService.add({ key: 'shared', severity: 'success', summary: 'Sucesso', detail: `Usuário ${acao}`, life: 2000 })
      this.voltar()
    })
  }

  voltar(): void {
    this.router.navigate(['usuarios'])
  }
}
