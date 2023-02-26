import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { GlobalToast } from './global-toast';

@Injectable({
  providedIn: 'root'
})
export class GlobalToastService {

  private toastSubject = new Subject<GlobalToast>()

  constructor() { }

  get toast() { return this.toastSubject.asObservable() }

  showHttpError(error: HttpErrorResponse): void {
    let message: string
    switch (error.status) {
      case 0:
        message = 'Falha na conexão com o servidor'
        break;
      case 401:
        message = 'Usuário ou senha inválidos'
        break
      case 500:
        message = 'Ocorreu um erro interno no servidor'
        break
      default:
        message = error.error.message
        break;
    }
    this.showError(message)
  }

  showError(message: string, life = 3000, title = 'Erro'): void {
    this.toastSubject.next({ severity: 'error', summary: title, detail: message, life })
  }

  showSuccess(message: string, life = 2000, title = 'Sucesso'): void {
    this.toastSubject.next({ severity: 'success', summary: title, detail: message, life })
  }
}
