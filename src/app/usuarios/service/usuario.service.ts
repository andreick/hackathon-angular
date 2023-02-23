import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Usuario } from './interface/usuario';
import { FormularioUsuario } from './interface/formulario-usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private readonly API = `${environment.API}/usuarios`

  constructor(
    private http: HttpClient
  ) { }

  listarUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.API)
  }

  criarUsuario(usuario: FormularioUsuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.API, usuario)
  }

  atualizarUsuario(id: number, usuario: FormularioUsuario): Observable<Usuario> {
    const url = this.formarUrl(id)
    return this.http.put<Usuario>(url, usuario)
  }

  buscarPorId(id: number): Observable<Usuario> {
    const url = this.formarUrl(id)
    return this.http.get<Usuario>(url)
  }

  private formarUrl(id: number): string {
    return `${this.API}/${id}`
  }
}
