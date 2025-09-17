import { Component } from '@angular/core';
import {navigatingBar, OnBoardingTask} from '../model/onboadingTask';
import {RouterLink} from '@angular/router';
import {Header} from '../header/header';

@Component({
  selector: 'app-home-page',
  imports: [
    RouterLink,
    Header
  ],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss'
})
export class HomePage {
  tasks: OnBoardingTask[] = navigatingBar;
}
