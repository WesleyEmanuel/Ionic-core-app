export interface User {
    id: number;
    email: string;
    senha: string;
    nome: string;
    idade: string;
    genero: string;
    cidade: string;
    avatar_id: number;
    imagem?: string;
    perfil_id: number;
  }
  
  export interface LoginUser {
    email: string;
    senha: string;
  }
  
  export interface CadastroUser {
    email?: string;
    senha?: string;
    confirmar_senha?: string;
    nome?: string;
    idade?: number;
    genero?: string;
    cidade?: string;
    termos?: boolean;
    avatar_id?: number;
    perfil_id?: number;
  }
  