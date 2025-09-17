import {Component, Input, TemplateRef} from '@angular/core';
import {NgTemplateOutlet} from '@angular/common';
import {UserData} from '../../model/userData';

@Component({
  selector: 'app-card',
  imports: [
    NgTemplateOutlet
  ],
  templateUrl: './card.html',
  styleUrl: './card.scss'
})
export class Card {
  @Input()
  customCard?: TemplateRef<any>;

  @Input({required: true}) data!: UserData;
}
