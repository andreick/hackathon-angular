import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { TokenService } from '../token/token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private loginSubject = new BehaviorSubject<String | null>(null);

  constructor(private tokenService: TokenService) {
    if (this.isLoggedIn()) {
      this.loginSubject.next(tokenService.token);
    }
  }

  get login() {
    return this.loginSubject.asObservable();
  }

  saveToken(token: string) {
    this.tokenService.token = token;
    this.loginSubject.next(token);
  }

  logout() {
    this.tokenService.deleteToken();
    this.loginSubject.next(null);
  }

  isLoggedIn() {
    return this.tokenService.hasToken();
  }
}
