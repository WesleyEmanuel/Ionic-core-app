import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { FaleConoscoPageRoutingModule } from './fale-conosco-routing.module';
import { FaleConoscoPage } from './fale-conosco.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    SharedModule,
    FaleConoscoPageRoutingModule,
  ],
  declarations: [FaleConoscoPage],
})
export class FaleConoscoPageModule {}
