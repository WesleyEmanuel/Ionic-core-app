import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { InputErrorComponent } from './components/input-error/input-error.component';
import { HeaderComponent } from './components/header/header.component';
import { CustomInputComponent } from './components/custom-input/custom-input.component';
import { CustomSelectComponent } from './components/custom-select/custom-select.component';

@NgModule({
  declarations: [
    InputErrorComponent,
    HeaderComponent,
    CustomInputComponent,
    CustomSelectComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
  ],
  exports: [
    InputErrorComponent,
    HeaderComponent,
    CustomInputComponent,
    CustomSelectComponent,
  ],
})
export class SharedModule {}
