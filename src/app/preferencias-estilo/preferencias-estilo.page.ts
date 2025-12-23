import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-preferencias-estilo',
  templateUrl: './preferencias-estilo.page.html',
  styleUrls: ['./preferencias-estilo.page.scss'],
})
export class PreferenciasEstiloPage implements OnInit {
  preferenciasForm: FormGroup;

  estilosDisponiveis = [
    'Clássico',
    'Romântico',
    'Criativo',
    'Chique',
    'Não sei Definir',
    'Casual Elegante',
    'Moderno',
    'Boho',
    'Esportivo',
    'Urbano',
    'Executivo',
    'Minimalista',
    'Sexy',
    'Preppy',
    'Vintage',
    'Glamuroso',
    'Artístico',
  ];

  estilosSelecionados: string[] = ['Clássico', 'Romântico', 'Criativo', 'Chique'];

  coresDisponiveis = [
    '#000000',
    '#FFFFFF',
    '#F5F5DC',
    '#E6E6FA',
    '#D3D3D3',
    '#FFB6C1',
    '#8B4513',
    '#D2B48C',
    '#FF7F50',
    '#8B0000',
    '#654321',
    '#00008B',
    '#87CEEB',
    '#808000',
    '#98FB98',
    '#FFFF00',
    '#FFC0CB',
  ];

  coresSelecionadas: string[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.preferenciasForm = this.formBuilder.group({
      referencias: [''],
    });
  }

  ngOnInit() {
    // Carregar dados salvos se existirem
    this.carregarPreferencias();
  }

  carregarPreferencias() {
    // TODO: Carregar do serviço/API
    // Por enquanto, usando valores padrão
  }

  toggleEstilo(estilo: string) {
    const index = this.estilosSelecionados.indexOf(estilo);
    if (index > -1) {
      this.estilosSelecionados.splice(index, 1);
    } else {
      this.estilosSelecionados.push(estilo);
    }
  }

  isEstiloSelecionado(estilo: string): boolean {
    return this.estilosSelecionados.includes(estilo);
  }

  toggleCor(cor: string) {
    const index = this.coresSelecionadas.indexOf(cor);
    if (index > -1) {
      this.coresSelecionadas.splice(index, 1);
    } else {
      this.coresSelecionadas.push(cor);
    }
  }

  isCorSelecionada(cor: string): boolean {
    return this.coresSelecionadas.includes(cor);
  }

  adicionarCor() {
    // TODO: Abrir seletor de cor customizado
    console.log('Adicionar cor customizada');
  }

  goBack() {
    this.router.navigate(['/menu']);
  }

  onSubmit() {
    if (this.preferenciasForm.valid) {
      const dados = {
        estilos: this.estilosSelecionados,
        cores: this.coresSelecionadas,
        referencias: this.preferenciasForm.get('referencias')?.value,
      };
      // TODO: Salvar no serviço/API
      console.log('Salvando preferências:', dados);
      // Após salvar, pode navegar de volta ou mostrar mensagem de sucesso
      this.router.navigate(['/menu']);
    }
  }
}
