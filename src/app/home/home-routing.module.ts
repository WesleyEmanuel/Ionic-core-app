import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'menu',
        loadChildren: () =>
          import('../menu/menu.module').then((m) => m.MenuPageModule),
      },
      {
        path: 'solicitacoes-estilista',
        loadChildren: () =>
          import('../solicitacoes-estilista/solicitacoes-estilista.module').then(
            (m) => m.SolicitacoesEstilistaPageModule,
          ),
      },
      {
        path: 'detalhes-solicitacao/:id',
        loadChildren: () =>
          import('../detalhes-solicitacao/detalhes-solicitacao.module').then(
            (m) => m.DetalhesSolicitacaoPageModule,
          ),
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
