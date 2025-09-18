import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appInputResize]'
})
export class InputResize implements OnInit {
  @Input() minInputWidth?: number;
  @Input() maxInputWidth?: number;

  private defaultMinWidth = 10;
  private defaultMaxWidth = 200;

  @HostBinding('style.width') inputWidth: string = `${this.defaultMinWidth}px`;

  constructor(private element: ElementRef) {}

  ngOnInit() {
    if (this.minInputWidth) {
      this.inputWidth = `${this.minInputWidth}px`;
    }
  }

  @HostListener("input") onInput() {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    const input = this.element.nativeElement as HTMLInputElement;

    const minW = this.minInputWidth || this.defaultMinWidth;
    const maxW = this.maxInputWidth || this.defaultMaxWidth;

    const computedStyle = window.getComputedStyle(input);
    const totalHorizontalPadding = parseFloat(computedStyle.paddingLeft) + parseFloat(computedStyle.paddingRight);

    if (context) {
      context.font = this.getFont();
      const textWidth = context.measureText(input.value).width + totalHorizontalPadding + 5;
      if (textWidth >= minW && textWidth <= maxW) {
        input.style.width = `${textWidth}px`;
      } else {
        const width = textWidth < minW ? minW : maxW;
        input.style.width = `${width}px`;
      }
    }
  }

  private getFont(): string {
    const computedStyle = window.getComputedStyle(this.element.nativeElement);
    return `${computedStyle.fontWeight} ${computedStyle.fontSize} ${computedStyle.fontFamily}`;
  }
}
