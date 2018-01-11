import { Directive, ElementRef, Renderer, Input } from '@angular/core';

@Directive({
  selector: '[appScrollToView]',
  host: {
    '(window:scroll)': 'onScroll()'
  }
})
export class ScrollToViewDirective {

  @Input() appScrollToView: string;

  constructor(private el: ElementRef, private renderer: Renderer) {
  }

  ngOnInit() {
    this.testElement();
  }

  onScroll() {
    this.testElement();
  }

  testElement() {
    if(this.isElementVisible(this.el.nativeElement)) {
      this.renderer.setElementClass(this.el.nativeElement, 'in-view', true);
    }
  }

  isElementVisible(el) {
    var rect     = el.getBoundingClientRect(),
        vWidth   = window.innerWidth,
        vHeight  = window.innerHeight,
        efp      = function (x, y) { return document.elementFromPoint(x, y) };     

    // Return false if it's not in the viewport
    if (rect.right < 0 || rect.bottom < 0 
            || rect.left > vWidth || rect.top > vHeight)
        return false;

    // Return true if any of its four corners are visible
    return (
          el.contains(efp(rect.left,  rect.top))
      ||  el.contains(efp(rect.right, rect.top))
      ||  el.contains(efp(rect.right, rect.bottom))
      ||  el.contains(efp(rect.left,  rect.bottom))
    );
  }

}
