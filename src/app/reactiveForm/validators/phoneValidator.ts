import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

export function validatePhoneNumber(): ValidatorFn {
  return (control:AbstractControl) : ValidationErrors | null => {
    const value = control.value.replace(/ /g, '');

    console.log(value);
    if (value) {
      const phoneRegex = /^\+?[1-9][0-9]{7,14}$/

      if (phoneRegex.test(value)) {
        return null;
      }
    }


    return { notAPhoneNumber: true };
  }
}
