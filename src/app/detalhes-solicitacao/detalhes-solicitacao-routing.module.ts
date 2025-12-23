import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalhesSolicitacaoPage } from './detalhes-solicitacao.page';

const routes: Routes = [
  {
    path: '',
    component: DetalhesSolicitacaoPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalhesSolicitacaoPageRoutingModule {}

