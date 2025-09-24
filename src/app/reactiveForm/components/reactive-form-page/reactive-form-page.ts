import { Component } from '@angular/core';
import {Header} from '../../../shared/header/header';
import {CustomComplexForm} from '../custom-complex-form/custom-complex-form';

@Component({
  selector: 'app-reactive-form-page',
  imports: [
    Header,
    CustomComplexForm
  ],
  templateUrl: './reactive-form-page.html',
  styleUrl: './reactive-form-page.scss'
})
export class ReactiveFormPage {

}
