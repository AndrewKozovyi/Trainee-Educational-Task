import {ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {PostModel} from '../../model/postModel';

@Component({
  selector: 'app-post',
  imports: [],
  templateUrl: './post.html',
  styleUrl: './post.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Post implements OnChanges {
  @Input({ required: true }) post!: PostModel;
  @Input() author?: string;

  ngOnChanges(changes: SimpleChanges) {
    console.log('changes were made to ' + this.post.title);
  }
}
