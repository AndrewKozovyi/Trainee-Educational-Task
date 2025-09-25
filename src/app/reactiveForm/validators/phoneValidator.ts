import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

export function validatePhoneNumber(): ValidatorFn {
  return (control:AbstractControl) : ValidationErrors | null => {
    const value = control.value;

    if (value) {
      const phoneRegex = /(?=.*\+[0-9]{2}\s?\([0-9]{3}\)\s?[0-9]{3}\s?[0-9]{2}\s?[0-9]{2}$)/

      if (phoneRegex.test(value)) {
        return null;
      }
    }


    return { notAPhoneNumber: true };
  }
}
