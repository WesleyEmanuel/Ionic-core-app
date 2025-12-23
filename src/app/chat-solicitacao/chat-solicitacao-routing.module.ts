import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatSolicitacaoPage } from './chat-solicitacao.page';

const routes: Routes = [
  {
    path: '',
    component: ChatSolicitacaoPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatSolicitacaoPageRoutingModule {}

