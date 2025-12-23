import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fale-conosco',
  templateUrl: './fale-conosco.page.html',
  styleUrls: ['./fale-conosco.page.scss'],
})
export class FaleConoscoPage implements OnInit {
  faleConoscoForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.faleConoscoForm = this.formBuilder.group({
      nome: ['Mariana Lima'],
      email: [''],
      titulo: [''],
      mensagem: ['', Validators.required],
    });
  }

  ngOnInit() {
    // TODO: Carregar dados do usuário logado se disponível
  }

  goBack() {
    this.router.navigate(['/suas-mensagens']);
  }

  onSubmit() {
    if (this.faleConoscoForm.valid) {
      const dados = {
        nome: this.faleConoscoForm.get('nome')?.value,
        email: this.faleConoscoForm.get('email')?.value,
        titulo: this.faleConoscoForm.get('titulo')?.value,
        mensagem: this.faleConoscoForm.get('mensagem')?.value,
      };
      // TODO: Enviar para API
      console.log('Enviando mensagem:', dados);
      // Após enviar, pode navegar de volta ou mostrar mensagem de sucesso
      this.router.navigate(['/suas-mensagens']);
    }
  }
}
