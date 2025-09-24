import {Component, inject, Input, OnInit} from '@angular/core';
import {BehaviorSubject, debounceTime, distinctUntilChanged, iif, map, mergeMap, of, tap} from 'rxjs';
import {AsyncPipe} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {evenLettersToUpperCase} from '../../operators/inputOperator';

@Component({
  selector: 'app-custom-search-input',
  imports: [
    AsyncPipe,
    FormsModule,
  ],
  templateUrl: './custom-search-input.html',
  styleUrl: './custom-search-input.scss'
})
export class CustomSearchInput implements OnInit {
  private http = inject(HttpClient);
  inputData$ = new BehaviorSubject<string>('');

  @Input() useCustomOperator = false;

  ngOnInit() {
    this.inputData$.pipe(
      debounceTime(400),
      mergeMap(value => iif(
        () => this.useCustomOperator,
        of(value).pipe(evenLettersToUpperCase()),
        of(value)
      )), //custom operator
      map((value) => value.trim()),
      distinctUntilChanged(),
      tap((value) => {
        this.http.post('/search', value).subscribe({
            error: error => {
            }
          }
        );
      })
    ).subscribe({
      next: data => {
        console.log(data);
      },
      error: error => {
        console.log(error);
      },
      complete: () => {
        console.log('done');
      }
    })
  }
}
