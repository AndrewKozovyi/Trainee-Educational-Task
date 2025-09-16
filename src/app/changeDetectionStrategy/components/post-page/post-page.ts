import {Component, inject} from '@angular/core';
import {PostsList} from '../posts-list/posts-list';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {PostForm} from '../post-form/post-form';

@Component({
  selector: 'app-post-page',
  imports: [
    PostsList,
    MatDialogModule
  ],
  templateUrl: './post-page.html',
  styleUrl: './post-page.scss'
})
export class PostPage {
  dialog = inject(MatDialog);

  onAddPost() {
    const dialogRef = this.dialog.open(PostForm, {
      width: '400px',
      height: 'fit-content',
    })
  }
}
