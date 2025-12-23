import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SolicitacoesEstilistaPage } from './solicitacoes-estilista.page';

const routes: Routes = [
  {
    path: '',
    component: SolicitacoesEstilistaPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SolicitacoesEstilistaPageRoutingModule {}

