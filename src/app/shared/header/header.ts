import {Component, Input, TemplateRef} from '@angular/core';
import {NgTemplateOutlet} from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [
    NgTemplateOutlet
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  @Input()
  headerTemplate?: TemplateRef<any>;

  @Input()
  title?: string;
}
