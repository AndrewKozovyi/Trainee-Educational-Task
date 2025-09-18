import {
  Directive,
  Input,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';

@Directive({
  selector: '[ngIfAnalog]'
})
export class NgIfAnalog {
  private show = false;

  @Input() set ngIfAnalog(value: boolean) {
    if (value && !this.show) {
      this.vC.createEmbeddedView(this.tR);
      this.show = true;
    } else {
      this.vC.clear();
      this.show = false;
    }
  }

  constructor(
    private tR: TemplateRef<any>,
    private vC: ViewContainerRef
  ) {}
}
