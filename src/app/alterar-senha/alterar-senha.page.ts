import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-alterar-senha',
  templateUrl: './alterar-senha.page.html',
  styleUrls: ['./alterar-senha.page.scss'],
})
export class AlterarSenhaPage implements OnInit {
  alterarSenhaForm: FormGroup;
  showCurrentPassword = false;
  showNewPassword = false;
  showConfirmPassword = false;

  constructor(
    private navController: NavController,
    private formBuilder: FormBuilder
  ) {
    this.alterarSenhaForm = this.formBuilder.group({
      currentPassword: ['', [Validators.required]],
      newPassword: ['', [Validators.required, Validators.minLength(8), this.passwordValidator()]],
      confirmPassword: ['', [Validators.required]]
    }, { validators: this.passwordMatchValidator });
  }

  ngOnInit() {}

  passwordValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;
      if (!value) return null;
      const hasLetter = /[a-zA-Z]/.test(value);
      const hasNumber = /[0-9]/.test(value);
      return hasLetter && hasNumber ? null : { invalidPassword: true };
    };
  }

  passwordMatchValidator(form: FormGroup) {
    const newPassword = form.get('newPassword');
    const confirmPassword = form.get('confirmPassword');
    if (!newPassword || !confirmPassword) return null;
    return newPassword.value === confirmPassword.value ? null : { mismatch: true };
  }

  togglePasswordVisibility(field: 'current' | 'new' | 'confirm') {
    if (field === 'current') {
      this.showCurrentPassword = !this.showCurrentPassword;
    } else if (field === 'new') {
      this.showNewPassword = !this.showNewPassword;
    } else if (field === 'confirm') {
      this.showConfirmPassword = !this.showConfirmPassword;
    }
  }

  goBack() {
    this.navController.back();
  }

  onSubmit() {
    if (this.alterarSenhaForm.valid) {
      // TODO: Implementar lógica de alteração de senha
      console.log('Form submitted:', this.alterarSenhaForm.value);
      // Aqui você faria a chamada para o serviço de autenticação
    } else {
      this.alterarSenhaForm.markAllAsTouched();
    }
  }

  get currentPasswordErrors() {
    const control = this.alterarSenhaForm.get('currentPassword');
    if (control && control.touched && control.errors) {
      return control.errors;
    }
    return null;
  }

  get newPasswordErrors() {
    const control = this.alterarSenhaForm.get('newPassword');
    if (control && control.touched && control.errors) {
      return control.errors;
    }
    return null;
  }

  get confirmPasswordErrors() {
    const control = this.alterarSenhaForm.get('confirmPassword');
    const formErrors = this.alterarSenhaForm.errors;
    if (control && control.touched && control.errors) {
      return control.errors;
    }
    if (formErrors && formErrors['mismatch'] && control && control.touched) {
      return { mismatch: true };
    }
    return null;
  }
}
