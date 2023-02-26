import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { Credenciais } from 'src/app/domain/credenciais';
import { AuthenticationService } from '../authentication/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private readonly API = `${environment.API}/login`

  constructor(
    private http: HttpClient,
    private authService: AuthenticationService,
  ) { }

  authenticate(credenciais: Credenciais): Observable<HttpResponse<any>> {
    return this.http.post<HttpResponse<any>>(this.API, credenciais, { observe: 'response' })
      .pipe(
        tap((response) => {
          console.log(response)
          const authToken = response.headers.get('Authorization') ?? '';
          console.log(authToken)
          this.authService.saveToken(authToken);
        })
      )
  }
}
