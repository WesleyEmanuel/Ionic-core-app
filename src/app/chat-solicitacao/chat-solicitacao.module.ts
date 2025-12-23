import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ChatSolicitacaoPageRoutingModule } from './chat-solicitacao-routing.module';
import { ChatSolicitacaoPage } from './chat-solicitacao.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    ChatSolicitacaoPageRoutingModule,
  ],
  declarations: [ChatSolicitacaoPage],
})
export class ChatSolicitacaoPageModule {}

