import {ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, OnInit} from '@angular/core';
import {Post} from '../post/post';
import {Posts} from '../../service/posts';
import {BehaviorSubject, Observable} from 'rxjs';
import {AsyncPipe} from '@angular/common';
import {PostModel} from '../../model/postModel';

@Component({
  selector: 'app-posts-list',
  imports: [
    AsyncPipe,
    Post
  ],
  templateUrl: './posts-list.html',
  styleUrl: './posts-list.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostsList implements OnInit {
  posts$!: Observable<PostModel[]>;
  postService = inject(Posts);
  cdr = inject(ChangeDetectorRef);
  comment = 'post';
  author$ = new BehaviorSubject('unknown');

  constructor() {
    setTimeout(() => {
      this.author$.next('Andrew');
      // this.cdr.markForCheck();
    },5000);
  }

  ngOnInit() {
    this.posts$ = this.postService.posts$;
  }

  onPostClick(index: number | undefined) {
    if (index === undefined || index < -1) {
      return;
    }

    this.postService.changePostName(index);
  }

  changeComment(){
    this.comment = this.comment === 'article' ? 'post' : 'article';
  }
}
