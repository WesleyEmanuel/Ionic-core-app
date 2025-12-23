import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'splash',
    pathMatch: 'full',
  },
  {
    path: 'splash',
    loadChildren: () =>
      import('./splash/splash.module').then((m) => m.SplashPageModule),
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'alterar-senha',
    loadChildren: () =>
      import('./alterar-senha/alterar-senha.module').then(
        (m) => m.AlterarSenhaPageModule,
      ),
  },
  {
    path: 'minhas-informacoes',
    loadChildren: () =>
      import('./minhas-informacoes/minhas-informacoes.module').then(
        (m) => m.MinhasInformacoesPageModule,
      ),
  },
  {
    path: 'termos-uso',
    loadChildren: () =>
      import('./termos-uso/termos-uso.module').then(
        (m) => m.TermosUsoPageModule,
      ),
  },
  {
    path: 'minhas-compras',
    loadChildren: () =>
      import('./minhas-compras/minhas-compras.module').then(
        (m) => m.MinhasComprasPageModule,
      ),
  },
  {
    path: 'detalhes-compra/:id',
    loadChildren: () =>
      import('./detalhes-compra/detalhes-compra.module').then(
        (m) => m.DetalhesCompraPageModule,
      ),
  },
  {
    path: 'preferencias-estilo',
    loadChildren: () =>
      import('./preferencias-estilo/preferencias-estilo.module').then(
        (m) => m.PreferenciasEstiloPageModule,
      ),
  },
  {
    path: 'suas-mensagens',
    loadChildren: () =>
      import('./suas-mensagens/suas-mensagens.module').then(
        (m) => m.SuasMensagensPageModule,
      ),
  },
  {
    path: 'ver-resposta/:id',
    loadChildren: () =>
      import('./ver-resposta/ver-resposta.module').then(
        (m) => m.VerRespostaPageModule,
      ),
  },
  {
    path: 'fale-conosco',
    loadChildren: () =>
      import('./fale-conosco/fale-conosco.module').then(
        (m) => m.FaleConoscoPageModule,
      ),
  },
  {
    path: 'financeiro',
    loadChildren: () =>
      import('./financeiro/financeiro.module').then(
        (m) => m.FinanceiroPageModule,
      ),
  },
  {
    path: 'clientes',
    loadChildren: () =>
      import('./clientes/clientes.module').then(
        (m) => m.ClientesPageModule,
      ),
  },
  {
    path: 'chat-solicitacao/:id',
    loadChildren: () =>
      import('./chat-solicitacao/chat-solicitacao.module').then(
        (m) => m.ChatSolicitacaoPageModule,
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
