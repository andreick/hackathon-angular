import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private readonly KEY = 'token';

  constructor() { }

  get token() {
    return localStorage.getItem(this.KEY) ?? '';
  }

  set token(token: string) {
    localStorage.setItem(this.KEY, token);
  }

  deleteToken(): void {
    localStorage.removeItem(this.KEY);
  }

  hasToken(): boolean {
    return this.token !== '';
  }
}
