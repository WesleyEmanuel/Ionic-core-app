import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerRespostaPage } from './ver-resposta.page';

const routes: Routes = [
  {
    path: '',
    component: VerRespostaPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerRespostaPageRoutingModule {}
