import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreferenciasEstiloPage } from './preferencias-estilo.page';

const routes: Routes = [
  {
    path: '',
    component: PreferenciasEstiloPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PreferenciasEstiloPageRoutingModule {}
