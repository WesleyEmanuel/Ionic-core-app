import {
  Component,
  Input,
  forwardRef,
  ContentChildren,
  QueryList,
  AfterContentInit,
} from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  NG_VALIDATORS,
  FormControl,
  Validator,
} from '@angular/forms';
import { IonSelectOption } from '@ionic/angular';

@Component({
  selector: 'app-custom-select',
  templateUrl: './custom-select.component.html',
  styleUrls: ['./custom-select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomSelectComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => CustomSelectComponent),
      multi: true,
    },
  ],
})
export class CustomSelectComponent
  implements ControlValueAccessor, Validator, AfterContentInit
{
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() required: boolean = false;

  @ContentChildren(IonSelectOption) options!: QueryList<IonSelectOption>;

  value: string | null = null;
  disabled: boolean = false;

  private onChange = (value: string | null) => {};
  private onTouched = () => {};

  ngAfterContentInit(): void {
    // Apenas garante que as opções foram projetadas; nada extra por enquanto.
  }

  writeValue(value: string | null): void {
    this.value = value ?? null;
  }

  registerOnChange(fn: (value: string | null) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  onSelectChange(event: any): void {
    const value = event.detail?.value ?? null;
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
}

