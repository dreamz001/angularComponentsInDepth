import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input('appHighlight') appColor:string = "yellow";
  @Input() color:string ;
  constructor(private element : ElementRef) {
    
   }
   
   @HostListener('mouseenter') addHighlight(){
    this.element.nativeElement.style.backgroundColor = this.color?this.color:this.appColor;
   }

   @HostListener('mouseleave') removeHighlight(){
    this.element.nativeElement.style.backgroundColor = null;
   }
}
