import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { SuasMensagensPageRoutingModule } from './suas-mensagens-routing.module';
import { SuasMensagensPage } from './suas-mensagens.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    SuasMensagensPageRoutingModule,
  ],
  declarations: [SuasMensagensPage],
})
export class SuasMensagensPageModule {}
