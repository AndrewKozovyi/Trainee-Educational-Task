import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {ReviewModel} from '../model/reviewModel';

@Injectable({
  providedIn: 'root'
})
export class Review {
  private reviewsSubject = new BehaviorSubject<ReviewModel[]>([]);
  private id: number = 0;
  reviews$ = this.reviewsSubject.asObservable();

  getReviews() {
    return this.reviewsSubject.value;
  }

  createReview(review: ReviewModel): void {
    review.id = this.id++;
    const newReviews = [ ...this.getReviews(), review];
    this.reviewsSubject.next(newReviews);
  }
}
