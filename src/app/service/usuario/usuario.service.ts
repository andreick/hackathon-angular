import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Usuario } from 'src/app/domain/usuario/usuario';
import { FormularioUsuario } from 'src/app/domain/usuario/formulario-usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private readonly API = `${environment.API}/usuarios`

  constructor(
    private http: HttpClient
  ) { }

  listar(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.API)
  }

  criar(usuario: FormularioUsuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.API, usuario)
  }

  atualizar(id: number, usuario: FormularioUsuario): Observable<Usuario> {
    const url = this.formarUrl(id)
    return this.http.put<Usuario>(url, usuario)
  }

  excluir(id: number): Observable<void> {
    const url = this.formarUrl(id)
    return this.http.delete<void>(url)
  }

  buscarPorId(id: number): Observable<Usuario> {
    const url = this.formarUrl(id)
    return this.http.get<Usuario>(url)
  }

  private formarUrl(id: number): string {
    return `${this.API}/${id}`
  }
}
