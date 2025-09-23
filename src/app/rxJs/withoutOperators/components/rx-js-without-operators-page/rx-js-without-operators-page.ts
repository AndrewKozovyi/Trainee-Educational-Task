import { Component } from '@angular/core';
import {Header} from '../../../../shared/header/header';
import {CustomCountDown} from '../custom-count-down/custom-count-down';
import {CustomSearchInput} from '../custom-search-input/custom-search-input';

@Component({
  selector: 'app-rx-js-without-operators-page',
  imports: [
    Header,
    CustomCountDown,
    CustomSearchInput
  ],
  templateUrl: './rx-js-without-operators-page.html',
  styleUrl: './rx-js-without-operators-page.scss'
})
export class RxJsWithoutOperatorsPage {

}
