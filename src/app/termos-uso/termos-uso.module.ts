import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { TermosUsoPageRoutingModule } from './termos-uso-routing.module';
import { TermosUsoPage } from './termos-uso.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    TermosUsoPageRoutingModule,
  ],
  declarations: [TermosUsoPage],
})
export class TermosUsoPageModule {}
