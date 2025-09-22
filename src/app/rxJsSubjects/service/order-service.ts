import {Injectable} from '@angular/core';
import {AsyncSubject, BehaviorSubject, ReplaySubject, Subject} from 'rxjs';
import {Purchase} from '../model/purchase';

@Injectable()
export class OrderService {
  purchasedItem$ = new Subject<Purchase>();
  recentPurchasedItems$ = new ReplaySubject<Purchase>(10);
  totalSoldItems$ = new BehaviorSubject<number>(0);
  totalSumForSoldItems$ = new AsyncSubject<number>();

  private sum = 0;

  constructor() {
    this.totalSumForSoldItems$.next(this.sum);
  }

  onPurchase(item: Purchase) {
    this.sum += item.price;

    this.purchasedItem$.next(item);
    this.recentPurchasedItems$.next(item);
    this.totalSoldItems$.next(this.totalSoldItems$.value+1);
    this.totalSumForSoldItems$.next(this.sum);
  }

  clearAllData() {
    this.sum = 0;

    this.totalSoldItems$.next(0);
    this.totalSumForSoldItems$.next(0);
  }
}
