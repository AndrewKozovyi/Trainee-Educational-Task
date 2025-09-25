import {debounceTime, map, MonoTypeOperatorFunction, Observable, tap} from 'rxjs';

export function evenLettersToUpperCase(): MonoTypeOperatorFunction<string> {
  return (source: Observable<string>): Observable<string> =>
    new Observable<string>((subscriber) => {
      let a: string;
      return source.pipe(
        debounceTime(400),
        map(value => value.trim()),
        map((value) => {
          let b = value.split('');
          for (let i = 0; i < value.length; i++) {
            if (i < value.length && i % 2 === 0) {
              b[i] = value[i].toUpperCase();
            }
          }
          return b.join('');
        }),
      ).subscribe({
        next(value) {
          subscriber.next(value);
        },
        error(err) {
          subscriber.error(err);
        },
        complete() {
          subscriber.complete();
        },
      });
    });
}
