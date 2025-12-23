import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { SolicitacoesEstilistaPageRoutingModule } from './solicitacoes-estilista-routing.module';
import { SolicitacoesEstilistaPage } from './solicitacoes-estilista.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    SolicitacoesEstilistaPageRoutingModule,
  ],
  declarations: [SolicitacoesEstilistaPage],
})
export class SolicitacoesEstilistaPageModule {}

