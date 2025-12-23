import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-error',
  templateUrl: './input-error.component.html',
  styleUrls: ['./input-error.component.scss'],
})
export class InputErrorComponent {
  @Input() errors: any;
  get messages() {
    for (const key in this.errors) {
      let message = this.getErrorMessage(key, this.errors[key]);
      return [message];
    }
    return [];
  }

  getErrorMessage(key: string, value?: any) {
    const errorMessages: { [key: string]: string } = {
      required: 'Campo obrigatório',
      email: 'E-mail inválido',
      minlength: 'Campo deve ter no mínimo [requiredLength] caracteres',
      mismatch: 'As senhas não conferem',
      mismatchField: 'Os campos não conferem',
      min: 'Campo deve ser maior ou igual a [min]',
      invalidPassword: 'Senha deve conter pelo menos 1 letra e 1 número',
    };
    let message = errorMessages[key] ?? 'Campo inválido';
    if (typeof value === 'object') {
      for (const key in value) {
        message = message.replace(`[${key}]`, value[key]);
      }
    } else if (value !== undefined) {
      message = message.replace('[value]', value);
    }
    if (message) return message;
    return null;
  }
}
