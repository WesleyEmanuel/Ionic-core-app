import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-minhas-informacoes',
  templateUrl: './minhas-informacoes.page.html',
  styleUrls: ['./minhas-informacoes.page.scss'],
})
export class MinhasInformacoesPage implements OnInit {
  informacoesForm: FormGroup;
  profileImage = 'assets/icon/favicon.png'; // Imagem padrão

  constructor(
    private navController: NavController,
    private formBuilder: FormBuilder
  ) {
    this.informacoesForm = this.formBuilder.group({
      nome: ['Mariana Lima', [Validators.required]],
      email: ['email@email.com', [Validators.required, Validators.email]],
      celular: ['', []],
      dataNascimento: ['', []],
      altura: ['', []],
      peso: ['', []],
      tipoCorpo: ['', []],
      numeracaoAlfabeticaSuperior: ['', []],
      numeracaoNumericaSuperior: ['', []],
      numeracaoAlfabeticaInferior: ['', []],
      numeracaoNumericaInferior: ['', []],
      numeracaoCalcado: ['', []],
    });
  }

  ngOnInit() {}

  goBack() {
    this.navController.back();
  }

  onEditPhoto() {
    // TODO: Implementar lógica para editar foto
    console.log('Edit photo clicked');
  }

  onSubmit() {
    if (this.informacoesForm.valid) {
      // TODO: Implementar lógica de salvamento
      console.log('Form submitted:', this.informacoesForm.value);
    } else {
      this.informacoesForm.markAllAsTouched();
    }
  }
}
