import {Component, ContentChild, EventEmitter, Input, Output, TemplateRef} from '@angular/core';
import {NgClass, NgTemplateOutlet} from '@angular/common';

@Component({
  selector: 'app-custom-select',
  imports: [
    NgTemplateOutlet,
    NgClass
  ],
  templateUrl: './custom-select.html',
  styleUrl: './custom-select.scss'
})
export class CustomSelect {
  @Input() options: any[] = [];
  @Input() selectedOption: any;

  @Output() selectedOptionChange = new EventEmitter<any>();

  @ContentChild(TemplateRef) customTemplate!: TemplateRef<any>;

  isOpen = false;

  select(option: any) {
    this.selectedOption = option;
    this.selectedOptionChange.emit(this.selectedOption);
    this.isOpen = false
  }
}
