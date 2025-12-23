import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlterarSenhaPage } from './alterar-senha.page';

const routes: Routes = [
  {
    path: '',
    component: AlterarSenhaPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlterarSenhaPageRoutingModule {}
