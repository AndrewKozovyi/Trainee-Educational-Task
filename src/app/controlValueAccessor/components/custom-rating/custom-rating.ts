import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'app-custom-rating',
  imports: [
    NgClass
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: CustomRating
    }
  ],
  templateUrl: './custom-rating.html',
  styleUrl: './custom-rating.scss'
})
export class CustomRating implements ControlValueAccessor{
  @Input() formControlName!: string;
  protected readonly Array = Array;

  rating: number = 0;
  disabled = false;

  onChange: OnChangeFunction<number> = () => {};
  onTouch: OnTouchFunction = () => {};

  writeValue(value: number): void {
    if (value === null) { return; }
    this.rating = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  setRating(rating: number) {
    this.rating = rating;
    this.onChange(rating);
  }

}
