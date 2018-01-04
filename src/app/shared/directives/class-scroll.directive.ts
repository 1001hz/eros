import { Directive, ElementRef, Renderer, Input } from '@angular/core';

@Directive({
  selector: '[appClassScroll]',
  host: {
    '(window:scroll)': 'onScroll()'
  }
})
export class ClassScrollDirective {

  @Input() appClassScroll: number;
  @Input() appClassScrollName: string;

  constructor(private el: ElementRef, private renderer: Renderer) {
  }

  ngOnInit() {

  }

  onScroll() {

    if(window.scrollY > this.appClassScroll) {
      this.renderer.setElementClass(this.el.nativeElement, this.appClassScrollName, true);
    }
    else {
      this.renderer.setElementClass(this.el.nativeElement, this.appClassScrollName, false);
    }
  }

}
