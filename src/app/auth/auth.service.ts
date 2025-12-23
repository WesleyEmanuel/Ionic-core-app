import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { ReplaySubject, catchError, lastValueFrom, map, of, tap } from 'rxjs';
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
    
    // Se houver um usuário mockado salvo, retorna ele
    const mockUser = localStorage.getItem('mock_user');
    if (mockUser) {
      const user = JSON.parse(mockUser) as User;
      this.usuario.next(user);
      return of(user);
    }
    
    return this.http.get<Response<User>>(`${API_URL}/perfil`).pipe(
      map((res) => res.data),
      catchError((error: any) => {
        console.error(error);
        return of(null);
      }),
      tap({
        next: (usuario) => this.usuario.next(usuario),
        error: () => this.usuario.next(null),
      })
    );
  }

  // Método mockado para login de teste
  loginMock(email: string, password: string, perfil: 'client' | 'stylist') {
    // Cria um token mockado
    const mockToken = `mock_token_${Date.now()}`;
    this.token = mockToken;
    localStorage.setItem('access_token', mockToken);

    // Cria um usuário mockado baseado no perfil selecionado
    const mockUser: User = {
      id: 1,
      email: email,
      senha: password,
      nome: 'Mariana Lima',
      idade: '28',
      genero: 'F',
      cidade: 'São Paulo',
      avatar_id: 1,
      imagem: undefined,
      perfil_id: perfil === 'client' ? 1 : 2, // 1 = cliente, 2 = estilista
    };

    // Salva o usuário mockado
    localStorage.setItem('mock_user', JSON.stringify(mockUser));
    
    // Atualiza o usuário no serviço imediatamente para que os observables sejam notificados
    this.usuario.next(mockUser);
    
    // Também chama getUsuario para manter consistência
    lastValueFrom(this.getUsuario());
    
    return of(mockUser);
  }

  logout() {
    this.token = undefined;
    localStorage.removeItem('access_token');
    localStorage.removeItem('mock_user');
    this.usuario.next(null);
  }
}
