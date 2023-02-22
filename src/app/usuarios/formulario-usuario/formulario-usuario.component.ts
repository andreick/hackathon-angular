import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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

  formulario: FormGroup

  ontem = getYesterday(new Date())

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private service: UsuarioService
  ) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      nome: ['Julia', Validators.compose([notBlankValidator(), Validators.maxLength(50)])],
      email: ['julia@gmail.com', Validators.compose([notBlankValidator(), Validators.minLength(10), Validators.email])],
      dataNascimento: [null],
      login: ['julia', Validators.compose([notBlankValidator(), Validators.minLength(5), Validators.maxLength(20)])],
      senha: ['julia', Validators.compose([notBlankValidator(), Validators.minLength(4), Validators.maxLength(10)])]
    })
  }

  get nome() { return this.formulario.get('nome') }
  get email() { return this.formulario.get('email') }
  get dataNascimento() { return this.formulario.get('dataNascimento') }
  get login() { return this.formulario.get('login') }
  get senha() { return this.formulario.get('senha') }

  isTouched(control: AbstractControl) {
    return control?.touched
  }

  isBlank(control: AbstractControl) {
    return control?.errors?.['notBlank']
  }

  hasWrongLength(control: AbstractControl) {
    const errors = control?.errors
    return errors?.['minlength'] || errors?.['maxlength']
  }

  isNotEmail(control: AbstractControl) {
    return control?.errors?.['email']
  }

  enviar() {
    const formularioUsuario = this.formulario.value as FormularioUsuario
    this.service.criarUsuario(formularioUsuario).subscribe(() => this.voltar(), (error) => console.error(error))
  }

  voltar() {
    this.router.navigate([''])
  }
}
