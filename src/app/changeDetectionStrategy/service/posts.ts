import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {PostModel} from '../model/postModel';

@Injectable({
  providedIn: 'root'
})
export class Posts {
  private postsSubject = new BehaviorSubject<PostModel[]>([]);
  private postsId = 1;
  posts$ = this.postsSubject.asObservable();

  getPosts() {
    return this.postsSubject.value;
  }

  createPost(post: PostModel) {
    post.id = this.postsId++;
    const newPosts: PostModel[] = [...this.getPosts(), post];
    this.postsSubject.next(newPosts);
  }

  changePostName(index: number) {
    this.getPosts()[index] = { ...this.getPosts()[index], title: 'Change Detection Triggered'};
  }
}
