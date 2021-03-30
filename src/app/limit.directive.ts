import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appLimit]'
})
export class LimitDirective {
  @Input() appLimit: number;

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    if (this.appLimit >=   2) {
      this.el.nativeElement.style.backgroundColor = color;
    }
  }

}
