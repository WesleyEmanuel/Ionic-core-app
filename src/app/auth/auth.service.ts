import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { ReplaySubject, lastValueFrom, map, of, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../utils/constants';
import { Response } from '../interfaces/response';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private usuario = new ReplaySubject<User | null>(1);
  readonly usuario$ = this.usuario.asObservable();

  token?: string;

  constructor(private http: HttpClient) {
    const token = localStorage.getItem('access_token');
    if (token) this.token = token;
    lastValueFrom(this.getUsuario());
  }

  getToken() {
    if (this.token === undefined) {
      const token = localStorage.getItem('access_token');
      if (token) this.token = token;
    }
    return this.token;
  }

  getUsuario() {
    if (!this.getToken()) {
      this.usuario.next(null);
      return of(null);
    }
    return this.http.get<Response<User>>(`${API_URL}/perfil`).pipe(
      map((res) => res.data),
      tap({
        next: (usuario) => this.usuario.next(usuario),
        error: () => this.usuario.next(null),
      })
    );
  }
}
