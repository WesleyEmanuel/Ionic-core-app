import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, FormControl, Validator } from '@angular/forms';
import { InputMaskConfig } from '../../../interfaces/input-mask';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomInputComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => CustomInputComponent),
      multi: true,
    },
  ],
})
export class CustomInputComponent implements ControlValueAccessor, Validator {
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() type: string = 'text';
  @Input() required: boolean = false;
  @Input() rows: number = 6;
  @Input() isTextarea: boolean = false;
  @Input() showIcon: boolean = false;
  @Input() iconName: string = '';
  @Input() mask?: InputMaskConfig;
  @Output() iconClick = new EventEmitter<void>();

  value: string = '';
  disabled: boolean = false;

  private onChange = (value: string) => {};
  private onTouched = () => {};

  writeValue(value: string): void {
    this.value = value || '';
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  onInputChange(event: any): void {
    let value: string = event.detail?.value || event.target?.value || '';

    if (this.mask && !this.isTextarea) {
      value = this.applyMask(value, this.mask);
    }

    this.value = value;
    this.onChange(value);
  }

  onBlur(): void {
    this.onTouched();
  }

  validate(control: FormControl): { [key: string]: any } | null {
    if (this.required && !this.value) {
      return { required: true };
    }
    return null;
  }

  onIconClick(): void {
    this.iconClick.emit();
  }

  private applyMask(value: string, config: InputMaskConfig): string {
    const digits = value.replace(/\D/g, '');

    switch (config.type) {
      case 'currency':
        if (!digits) return '';
        const number = Number(digits) / 100;

        return number.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        });

      case 'cpf':
        return digits
          .slice(0, 11)
          .replace(/(\d{3})(\d)/, '$1.$2')
          .replace(/(\d{3})(\d)/, '$1.$2')
          .replace(/(\d{3})(\d{1,2})$/, '$1-$2');

      case 'phone':
        return digits
          .slice(0, 11)
          .replace(/(\d{2})(\d)/, '($1) $2')
          .replace(/(\d{5})(\d{1,4})$/, '$1-$2');

      case 'numeric':
        return digits;

      default:
        return value;
    }
  }
}
