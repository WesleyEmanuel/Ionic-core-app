import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { DetalhesSolicitacaoPageRoutingModule } from './detalhes-solicitacao-routing.module';
import { DetalhesSolicitacaoPage } from './detalhes-solicitacao.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    DetalhesSolicitacaoPageRoutingModule,
  ],
  declarations: [DetalhesSolicitacaoPage],
})
export class DetalhesSolicitacaoPageModule {}

