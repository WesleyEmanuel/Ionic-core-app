import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { PreferenciasEstiloPageRoutingModule } from './preferencias-estilo-routing.module';
import { PreferenciasEstiloPage } from './preferencias-estilo.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    SharedModule,
    PreferenciasEstiloPageRoutingModule,
  ],
  declarations: [PreferenciasEstiloPage],
})
export class PreferenciasEstiloPageModule {}
