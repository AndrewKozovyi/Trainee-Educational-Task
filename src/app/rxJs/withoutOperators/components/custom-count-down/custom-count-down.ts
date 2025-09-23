import { Component } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {TimeModel} from '../../model/timeModel';
import {DoubleZeroPipe} from '../../pipe/double-zero-pipe';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'app-custom-count-down',
  imports: [
    DoubleZeroPipe,
    AsyncPipe
  ],
  templateUrl: './custom-count-down.html',
  styleUrl: './custom-count-down.scss'
})
export class CustomCountDown {
  private minutesInHour = 60;
  private secondsInMinute = 60;
  private defaultTimer: TimeModel = {
    hours: 0,
    minutes: 5,
    seconds: 0
  }
  private sub: any;

  timer$ = new BehaviorSubject<TimeModel>(this.defaultTimer);
  countDownIsFinished = false;

  get timer() { return this.timer$.value }

  countDown$ = new Observable<TimeModel>((timer) => {
    let i = (
      this.timer.seconds +
      this.timer.minutes * this.secondsInMinute +
      this.timer.hours * this.minutesInHour * this.secondsInMinute
    ) - 1;

    const time = setInterval(() => {
      const currentHours = Math.floor(i / (this.minutesInHour * this.secondsInMinute));
      const currentMinutes = Math.floor((-currentHours * this.minutesInHour) + i/this.minutesInHour);
      const currentSeconds = Math.floor((i - (currentMinutes) * this.secondsInMinute) % 60);

      const currentTime: TimeModel = {
        hours: currentHours,
        minutes: currentMinutes,
        seconds: currentSeconds
      }

      timer.next(currentTime)

      if (i <= 0){
        timer.complete();
        clearInterval(time);
      }
      i--;
    }, 1000)

    return function unsubscribe() {
      clearInterval(time);
    };
  });

  startCountDown() {
    this.sub = this.countDown$.subscribe({
      next: (value) => {
        this.timer$.next(value);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        this.sub.unsubscribe();
        this.countDownIsFinished = true;
      }
    })
  }

  pauseCountDown() {
    this.sub.unsubscribe();
  }

  resetCountDown() {
    this.sub.unsubscribe();
    this.timer$.next(this.defaultTimer);
  }
}
