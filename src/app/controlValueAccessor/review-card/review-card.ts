import {Component, Input} from '@angular/core';
import {ReviewModel} from '../model/reviewModel';

@Component({
  selector: 'app-review-card',
  imports: [],
  templateUrl: './review-card.html',
  styleUrl: './review-card.scss'
})
export class ReviewCard {
  @Input() review?: ReviewModel;
}
