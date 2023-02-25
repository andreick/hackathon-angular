import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorMessageService {

  private errorSubject = new Subject<string>()

  constructor() { }

  get error() { return this.errorSubject.asObservable() }

  showError(error: HttpErrorResponse): void {
    let message: string
    switch (error.status) {
      case 0:
        message = 'Falha na conexão com o servidor'
        break;
      case 500:
        message = 'Ocorreu um erro interno no servidor'
        break
      default:
        message = error.error.message
        break;
    }
    this.errorSubject.next(message)
  }
}
