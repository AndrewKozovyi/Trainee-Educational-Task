import {filter, MonoTypeOperatorFunction, Observable} from 'rxjs';
import {TimeModel} from '../model/timeModel';

export function evenSeconds(): MonoTypeOperatorFunction<TimeModel>{
  return (source: Observable<TimeModel>): Observable<TimeModel> =>
    new Observable<TimeModel>((subscriber) => {
      return source.pipe(
        filter(time => time.seconds % 2 === 0),
      ).subscribe({
        next: (value) => {
          subscriber.next(value);
        },
        error: (error) => {
          subscriber.error(error);
        },
        complete: () => {
          subscriber.complete();
        }
      })
    });
}
