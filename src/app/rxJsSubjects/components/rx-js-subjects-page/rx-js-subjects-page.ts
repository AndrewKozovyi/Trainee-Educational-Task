import {Component, inject, Injector, OnDestroy, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {Header} from '../../../shared/header/header';
import {FormsModule} from '@angular/forms';
import {AsyncPipe, NgClass} from '@angular/common';
import {ItemsToPurchase, Purchase} from '../../model/purchase';
import {OrderService} from '../../service/order-service';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {Subject, Subscription, takeUntil} from 'rxjs';
import {FinishedDayAlert} from '../finished-day-alert/finished-day-alert';

@Component({
  selector: 'app-rx-js-subjects-page',
  imports: [
    Header,
    FormsModule,
    MatDialogModule,
    AsyncPipe,
    NgClass,
  ],
  templateUrl: './rx-js-subjects-page.html',
  styleUrl: './rx-js-subjects-page.scss',
  providers: [OrderService]
})
export class RxJsSubjectsPage implements OnInit, OnDestroy {
  private dialog = inject(MatDialog);
  orderService!: OrderService;

  items = ItemsToPurchase;
  dayIsFinished = false;
  areLogsActive = false;

  private destroy$ = new Subject<void>();

  ngOnInit() {
    this.subscribeToChanges();
  }

  private subscribeToChanges() {
    this.dayIsFinished = false;
    this.orderService = new OrderService();

    this.orderService.purchasedItem$
      .pipe(takeUntil(this.destroy$))
      .subscribe((res)=>{
    });

    this.orderService.totalSoldItems$
      .pipe(takeUntil(this.destroy$))
      .subscribe((res)=>{

    });

    this.orderService.totalSumForSoldItems$
      .pipe(takeUntil(this.destroy$))
      .subscribe((res)=>{
      this.dialog.open(FinishedDayAlert, {
        data: res,
        width: '400px',
        height: 'fit-content',
      })
    });
  }

  activateLogs() {
    if (!this.areLogsActive) {
      this.areLogsActive = true;

      this.orderService.recentPurchasedItems$
        .pipe(takeUntil(this.destroy$))
        .subscribe((res)=>{
          console.log(res)
        });
    }
  }

  private completeSubscriptions() {
    this.dayIsFinished = true;
    this.areLogsActive = false;

    this.orderService.purchasedItem$.complete();
    this.orderService.recentPurchasedItems$.complete();
    this.orderService.totalSoldItems$.complete();
    this.orderService.totalSumForSoldItems$.complete();

    this.orderService.clearAllData();
  }

  orderItem(item: Purchase) {
    this.orderService.onPurchase(item);
  }

  finishOrStartWorkDay() {
    if (!this.dayIsFinished) {
      this.completeSubscriptions();
    } else {
      this.subscribeToChanges();
    }
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
