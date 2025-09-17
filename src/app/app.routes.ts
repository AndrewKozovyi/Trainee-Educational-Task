import { Routes } from '@angular/router';
import {HomePage} from './shared/home-page/home-page';
import {PostPage} from './changeDetectionStrategy/components/post-page/post-page';

export const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'changeDetectionOnPush', component: PostPage },
  { path: '**', component: HomePage },
];
