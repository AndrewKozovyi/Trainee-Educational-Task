import {Component, inject, OnInit} from '@angular/core';
import {Header} from '../../../shared/header/header';
import {CustomForm} from '../../custom-form/custom-form';
import {Observable} from 'rxjs';
import {ReviewModel} from '../../model/reviewModel';
import {Review} from '../../service/review';
import {AsyncPipe} from '@angular/common';
import {ReviewCard} from '../../review-card/review-card';

@Component({
  selector: 'app-control-value-accessor-page',
  imports: [
    Header,
    CustomForm,
    AsyncPipe,
    ReviewCard
  ],
  templateUrl: './control-value-accessor-page.html',
  styleUrl: './control-value-accessor-page.scss'
})
export class ControlValueAccessorPage implements OnInit {
  reviewService = inject(Review);

  reviews$ = new Observable<ReviewModel[]>;

  ngOnInit() {
    this.reviews$ = this.reviewService.reviews$;
  }
}
