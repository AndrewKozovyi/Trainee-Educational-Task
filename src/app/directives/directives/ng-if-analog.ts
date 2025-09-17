import {Directive, ElementRef, inject, Input} from '@angular/core';

@Directive({
  selector: '[ngIfAnalog]'
})
export class NgIfAnalog {
  private el = inject(ElementRef);
  @Input() set ngIfAnalog(value: boolean) {
    this.el.nativeElement.style.display = value ? 'block' : 'none';
  }

  constructor() { }
}
