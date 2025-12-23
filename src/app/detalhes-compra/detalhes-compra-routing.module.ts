import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalhesCompraPage } from './detalhes-compra.page';

const routes: Routes = [
  {
    path: '',
    component: DetalhesCompraPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalhesCompraPageRoutingModule {}
