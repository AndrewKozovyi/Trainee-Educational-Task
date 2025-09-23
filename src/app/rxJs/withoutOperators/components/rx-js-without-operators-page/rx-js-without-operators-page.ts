import { Component } from '@angular/core';
import {Header} from '../../../../shared/header/header';
import {CustomCountDown} from '../custom-count-down/custom-count-down';

@Component({
  selector: 'app-rx-js-without-operators-page',
  imports: [
    Header,
    CustomCountDown
  ],
  templateUrl: './rx-js-without-operators-page.html',
  styleUrl: './rx-js-without-operators-page.scss'
})
export class RxJsWithoutOperatorsPage {

}
