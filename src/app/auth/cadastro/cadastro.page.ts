import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  selectedProfile: 'client' | 'stylist' | null = null;
  currentStep = 0; // 0: tipo, 1..: etapas do formulário
  termsAccepted = false;

  constructor(private navController: NavController) { }

  ngOnInit() {
  }

  onSelectProfile(profile: 'client' | 'stylist') {
    this.selectedProfile = profile;
  }

  get defaultHref() {
    return this.currentStep === 0 ? '/auth/login' : null;
  }

  get isClient() {
    return this.selectedProfile === 'client';
  }

  get isStylist() {
    return this.selectedProfile === 'stylist';
  }

  get maxStep() {
    // 0: tipo, 1: dados básicos, 2/3: específicos, 4: senha, 5: termos (acessível apenas pelo link)
    return 4;
  }

  goNext() {
    if (this.currentStep === 0 && !this.selectedProfile) {
      return;
    }
    // Não permite avançar para step 5 (termos) através do botão Continuar
    // Step 5 só é acessível através do link de termos na step 4
    if (this.currentStep < this.maxStep) {
      this.currentStep++;
    }
  }

  goBack() {
    if (this.currentStep === 0) {
      this.navController.navigateRoot('/auth/login');
      return;
    } else if (this.currentStep > 0) {
      this.currentStep--;
    }
  }

  openTerms() {
    this.currentStep = 5;
  }

  acceptTerms() {
    this.termsAccepted = true;
    this.currentStep = 4;
  }

  getHeaderTitle(): string {
    if (this.currentStep === 5) {
      return 'Termos de Politica';
    }
    return 'Cadastro';
  }

}
