import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { FormularioUsuario } from '../service/interface/formulario-usuario';
import { UsuarioService } from '../service/usuario.service';
import { getYesterday } from 'src/app/utils/get-yesterday';
import { notBlankValidator } from 'src/app/validators/not-blank.validator';

@Component({
  selector: 'app-formulario-usuario',
  templateUrl: './formulario-usuario.component.html',
  styleUrls: ['./formulario-usuario.component.css']
})
export class FormularioUsuarioComponent implements OnInit {

  id?: number

  formulario!: FormGroup
  get nome() { return this.formulario.get('nome') }
  get email() { return this.formulario.get('email') }
  get dataNascimento() { return this.formulario.get('dataNascimento') }
  get login() { return this.formulario.get('login') }
  get senha() { return this.formulario.get('senha') }

  ontem: Date = getYesterday(new Date())

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router,
    private service: UsuarioService
  ) { }

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id')
    if (idParam) {
      this.id = Number(idParam)
      this.service.buscarPorId(this.id).subscribe((usuario) => {
        this.nome?.setValue(usuario.nome)
        this.email?.setValue(usuario.email)
        this.dataNascimento?.setValue(new Date(usuario.dataNascimento))
        this.formulario.removeControl('login')
        this.formulario.removeControl('senha')
      })
    }

    this.formulario = this.formBuilder.group({
      nome: ['', Validators.compose([notBlankValidator(), Validators.maxLength(50)])],
      email: ['', Validators.compose([notBlankValidator(), Validators.minLength(10), Validators.email])],
      dataNascimento: [null],
      login: ['', Validators.compose([notBlankValidator(), Validators.minLength(5), Validators.maxLength(20)])],
      senha: ['', Validators.compose([notBlankValidator(), Validators.minLength(4), Validators.maxLength(10)])]
    })
  }

  isTouched(control: AbstractControl | null) {
    return control?.touched
  }

  isBlank(control?: AbstractControl | null) {
    return control?.errors?.['notBlank']
  }

  hasWrongLength(control?: AbstractControl | null) {
    const errors = control?.errors
    return errors?.['minlength'] || errors?.['maxlength']
  }

  isNotEmail(control?: AbstractControl | null) {
    return control?.errors?.['email']
  }

  enviar() {
    const formularioUsuario = this.formulario.value as FormularioUsuario
    if (this.id) {
      this.service.atualizarUsuario(this.id, formularioUsuario).subscribe(() => this.voltar(), (error) => console.error(error))
    } else {
      this.service.criarUsuario(formularioUsuario).subscribe(() => this.voltar(), (error) => console.error(error))
    }
  }

  voltar() {
    this.router.navigate([''])
  }
}
