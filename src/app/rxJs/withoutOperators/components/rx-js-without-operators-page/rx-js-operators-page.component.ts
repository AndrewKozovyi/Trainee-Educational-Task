import { Component } from '@angular/core';
import {Header} from '../../../../shared/header/header';
import {CustomCountDown} from '../custom-count-down/custom-count-down';
import {CustomSearchInput} from '../custom-search-input/custom-search-input';

@Component({
  selector: 'app-rx-js-operators-page',
  imports: [
    Header,
    CustomCountDown,
    CustomSearchInput
  ],
  templateUrl: './rx-js-operators-page.component.html',
  styleUrl: './rx-js-operators-page.component.scss'
})
export class RxJsOperatorsPage {
  useCustomOperator = false;
}
