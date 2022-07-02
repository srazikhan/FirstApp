import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appChangeBg]'
})
export class ChangeBgDirective {

  constructor(private renderer:Renderer2,private el:ElementRef) {
    // this.renderer.addClass(this.el.nativeElement,'btn-primary')
  }

  @HostListener('click') onClick() {
    //using renderer service
    this.renderer.setStyle(this.el.nativeElement,'background-color','yellow');
    this.renderer.setStyle(this.el.nativeElement,'color','red');

    //using javascript
    // this.el.nativeElement.style.backgroundColor = 'yellow';
    // this.el.nativeElement.style.color = 'red';
  }

  @HostListener('mouseover') onMouseOver() {
    this.renderer.setStyle(this.el.nativeElement,'background-color','black');
    this.renderer.setStyle(this.el.nativeElement,'color','white');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.setStyle(this.el.nativeElement,'background-color','green');
    this.renderer.setStyle(this.el.nativeElement,'color','white');
  }
}
