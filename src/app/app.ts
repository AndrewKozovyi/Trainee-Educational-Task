import { Component } from '@angular/core';
import {PostPage} from './changeDetectionStrategy/components/post-page/post-page';

@Component({
  selector: 'app-root',
  imports: [
    PostPage
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

}
