import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHoverColor]'
})
export class HoverColorDirective {

  constructor(
    private element: ElementRef,
    private render: Renderer2
  ) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.changeColor('yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.changeColor(null);
  }


  private changeColor(color: any){
    this.render.setStyle(this.element.nativeElement, 'backgroundColor', color);
    this.render.setStyle(this.element.nativeElement, 'cursor', 'pointer')
  }

}
