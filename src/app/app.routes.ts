import { Routes } from '@angular/router';
import {HomePage} from './shared/home-page/home-page';
import {PostPage} from './changeDetectionStrategy/components/post-page/post-page';
import {TemplatePage} from './templates/components/template-page/template-page';
import {DirectivePage} from './directives/components/directive-page/directive-page';
import {
  ControlValueAccessorPage
} from './controlValueAccessor/components/control-value-accessor-page/control-value-accessor-page';

export const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'changeDetectionOnPush', component: PostPage },
  { path: 'templates', component: TemplatePage },
  { path: 'directives', component: DirectivePage },
  { path: 'controlValueAccessor', component: ControlValueAccessorPage },
  { path: '**', component: HomePage },
];
