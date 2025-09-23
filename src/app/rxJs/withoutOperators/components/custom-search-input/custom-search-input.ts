import {Component, inject, OnInit} from '@angular/core';
import {BehaviorSubject, debounceTime, filter, map, pairwise, tap} from 'rxjs';
import {AsyncPipe} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HttpClient} from '@angular/common/http';

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

  ngOnInit() {
    this.inputData$.pipe(
      debounceTime(400),
      map((value) => value.trim()),
      pairwise(),
      filter((value) => value[0] !== value[1]),
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
