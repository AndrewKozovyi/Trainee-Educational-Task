import {Component, ContentChild, Input, TemplateRef} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {NgClass, NgTemplateOutlet} from '@angular/common';
import {Year} from '../../model/formModel';

@Component({
  selector: 'app-custom-year-select',
  imports: [
    NgTemplateOutlet,
    NgClass
  ],
  templateUrl: './custom-year-select.html',
  styleUrl: './custom-year-select.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: CustomYearSelect
    }
  ]
})
export class CustomYearSelect implements ControlValueAccessor {
  @Input() formControlName!: string;
  @Input() options: Year[] = [];
  selectedOption!: number;

  @ContentChild(TemplateRef) customTemplate!: TemplateRef<any>;

  isOpen = false;
  disabled = false;

  onChange: OnChangeFunction<number> = () => {}
  onTouch: OnTouchFunction = () => {};

  writeValue(value: number): void {
    this.selectedOption = value;
  }

  registerOnChange(fn: OnChangeFunction<number>): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: OnTouchFunction): void {
    this.onTouch = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  select(option: any) {
    this.selectedOption = option;
    this.onChange(option.year);
    this.isOpen = false
  }
}
