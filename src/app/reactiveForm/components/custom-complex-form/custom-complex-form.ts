import {Component, inject, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {CustomFIleLoader} from '../../../controlValueAccessor/components/custom-file-loader/custom-file-loader';
import {debounceTime} from 'rxjs';
import {InputText} from 'primeng/inputtext';
import {Year} from '../../model/formModel';
import {CustomYearSelect} from '../custom-year-select/custom-year-select';
import {Button} from 'primeng/button';
import {validatePhoneNumber} from '../../validators/phoneValidator';

@Component({
  selector: 'app-custom-complex-form',
  imports: [
    ReactiveFormsModule,
    CustomFIleLoader,
    InputText,
    FormsModule,
    CustomYearSelect,
    Button
  ],
  templateUrl: './custom-complex-form.html',
  styleUrl: './custom-complex-form.scss'
})
export class CustomComplexForm implements OnInit {
  private fb = inject(FormBuilder);

  requiredError = "*Required";
  minNumberError = "*At least";
  maxNumberError = "*Max length";
  years: Year[] = [];

  form = this.fb.group({
    fullName: this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      lastName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]]
    }),
    credentials: this.fb.group({
      phone: ['', [Validators.required, validatePhoneNumber()]],
      email: ['', [Validators.required, Validators.email, Validators.maxLength(45)]],
      birthYear: [null, [Validators.min(1930), Validators.max(2025)]]
    }),
    photoUrl: [''],
    address: this.fb.group({
      country: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      city: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      street: [''],
      house: ['']
    }),
    hobbies: this.fb.array([], Validators.maxLength(2)),
  })

  constructor() {
    let year = new Date().getFullYear();
    for (let i = year; i >= 1900; i--) {
      this.years.push({ id: i, year: i});
    }
  }

  get fullName() { return this.form.get('fullName'); }
  get firstName() { return this.form.get('fullName.firstName') as FormControl; }
  get lastName() { return this.form.get('fullName.lastName') as FormControl; }

  get credentials() { return this.form.get('credentials'); }
  get phone() { return this.form.get('credentials.phone') as FormControl; }
  get email() { return this.form.get('credentials.email') as FormControl; }
  get birthYear() { return this.form.get('credentials.birthYear') as FormControl; }

  get photoUrl() { return this.form.get('photoUrl'); }

  get address() { return this.form.get('address'); }
  get country() { return this.form.get('address.country') as FormControl; }
  get city() { return this.form.get('address.city') as FormControl; }

  get hobbies() { return this.form.get('hobbies') as FormArray; }

  ngOnInit() {
    this.form.valueChanges.pipe(
      debounceTime(500)
    ).subscribe({
      next: value => {
        console.log(value);
      }
    })
  }

  onSubmit() {
    console.log(this.form.value);
    console.log(this.form.valid);
    if (this.form.invalid) {
      return;
    }
  }

  addHobby() {
    const hobby = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      years: [null, [Validators.required, Validators.min(0)]],
    });

    this.hobbies.push(hobby);
  }

  removeHobby(index: number) {
    this.hobbies.removeAt(index);
  }

  canDisplayError(control: FormControl) {
    return control.invalid && (control.dirty || control.touched);
  }
}
