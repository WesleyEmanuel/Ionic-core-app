import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { MinhasInformacoesPageRoutingModule } from './minhas-informacoes-routing.module';
import { MinhasInformacoesPage } from './minhas-informacoes.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    MinhasInformacoesPageRoutingModule,
    SharedModule,
  ],
  declarations: [MinhasInformacoesPage],
})
export class MinhasInformacoesPageModule {}
