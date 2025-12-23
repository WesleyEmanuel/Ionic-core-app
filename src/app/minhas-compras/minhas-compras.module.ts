import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { MinhasComprasPageRoutingModule } from './minhas-compras-routing.module';
import { MinhasComprasPage } from './minhas-compras.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    MinhasComprasPageRoutingModule,
  ],
  declarations: [MinhasComprasPage],
})
export class MinhasComprasPageModule {}
