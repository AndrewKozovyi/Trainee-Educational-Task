import {Component, Input, TemplateRef, ViewChild} from '@angular/core';
import {Card} from "../card/card";
import {CustomSelect} from "../custom-select/custom-select";
import {Fullname} from "../fullname/fullname";
import {UserData} from '../../model/userData';

@Component({
  selector: 'app-cards-block',
    imports: [
        Card,
        CustomSelect,
        Fullname
    ],
  templateUrl: './cards-block.html',
  styleUrl: './cards-block.scss'
})
export class CardsBlock {
  @ViewChild('customCard') customCardRef!: TemplateRef<any>;

  @Input() heading = '';
  @Input() user?: UserData;
  @Input() users: UserData[] = [];
  @Input() different = false;
  @Input() useCustomCard? = false;

  get customCardIsNeeded() {
    if (this.useCustomCard) {
      return this.customCardRef;
    }
    return undefined;
  }

  get userCustomCard() {
    if (this.user && this.user.card === "custom") {
      return this.customCardRef
    }
    return undefined;
  }
}
