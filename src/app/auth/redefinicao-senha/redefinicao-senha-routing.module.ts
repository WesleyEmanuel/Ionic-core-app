import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RedefinicaoSenhaPage } from './redefinicao-senha.page';

const routes: Routes = [
  {
    path: '',
    component: RedefinicaoSenhaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RedefinicaoSenhaPageRoutingModule {}
