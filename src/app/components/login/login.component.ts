import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

import { Credenciais } from 'src/app/domain/credenciais';
import { GlobalToastService } from 'src/app/service/global-toast/global-toast.service';
import { LoginService } from 'src/app/service/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form!: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      { login: [''], senha: [''] }
    )
  }

  get login() { return this.form.get('login') }
  get senha() { return this.form.get('senha') }

  submit() {
    const login = this.form.value as Credenciais
    this.loginService.authenticate(login)
      .subscribe(() => { this.router.navigate(['usuarios']) })
  }
}
