import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { VerRespostaPageRoutingModule } from './ver-resposta-routing.module';
import { VerRespostaPage } from './ver-resposta.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    VerRespostaPageRoutingModule,
  ],
  declarations: [VerRespostaPage],
})
export class VerRespostaPageModule {}
