import { Component } from '@angular/core';
import {Header} from '../../../shared/header/header';
import {NgIfAnalog} from '../../directives/ng-if-analog';

@Component({
  selector: 'app-directive-page',
  imports: [
    Header,
    NgIfAnalog
  ],
  templateUrl: './directive-page.html',
  styleUrl: './directive-page.scss'
})
export class DirectivePage {
  ngIfAnalogValue = true;
}
