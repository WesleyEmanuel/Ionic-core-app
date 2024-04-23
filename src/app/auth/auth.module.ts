import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { RedefinicaoSenhaPageModule } from './redefinicao-senha/redefinicao-senha.module';
import { CadastroPageModule } from './cadastro/cadastro.module';
import { LoginPageModule } from './login/login.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuthRoutingModule,
    LoginPageModule,
    CadastroPageModule,
    RedefinicaoSenhaPageModule,
    HttpClientModule
  ]
})
export class AuthModule { }
