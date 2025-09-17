import {Component, TemplateRef, ViewChild} from '@angular/core';
import {UserData, userDummyData, userDummyDataDifferent} from '../../model/userData';
import {Header} from '../../../shared/header/header';
import {Fullname} from '../fullname/fullname';
import { ToggleButtonModule } from 'primeng/togglebutton';
import {FormsModule} from '@angular/forms';
import {CardsBlock} from '../cards-block/cards-block';

@Component({
  selector: 'app-template-page',
  imports: [
    Header,
    ToggleButtonModule,
    FormsModule,
    CardsBlock
  ],
  templateUrl: './template-page.html',
  styleUrl: './template-page.scss'
})
export class TemplatePage {
  usersSame: UserData[] = userDummyData;
  usersDifferent: UserData[] = userDummyDataDifferent;
  userSame: UserData | undefined;
  userDifferent: UserData | undefined;
  useCustomCard = false;
}
