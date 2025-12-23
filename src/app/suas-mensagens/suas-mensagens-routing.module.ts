import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuasMensagensPage } from './suas-mensagens.page';

const routes: Routes = [
  {
    path: '',
    component: SuasMensagensPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuasMensagensPageRoutingModule {}
