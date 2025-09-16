import {Component, inject} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {PostModel} from '../../model/postModel';
import {Posts} from '../../service/posts';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-post-form',
  imports: [ReactiveFormsModule],
  templateUrl: './post-form.html',
  styleUrl: './post-form.scss'
})
export class PostForm {
  postService = inject(Posts);
  postForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
  });

  constructor(private dialogRef: MatDialogRef<PostForm>) {}

  onSubmit() {
    if (this.postForm.invalid) {
      return;
    }

    const newPost: PostModel = {
      title: this.postForm.value.title as string,
      description: this.postForm.value.description as string
    }
    this.postService.createPost(newPost);
    this.dialogRef.close();
  };

  onCancel() {
    this.dialogRef.close();
  };
}
