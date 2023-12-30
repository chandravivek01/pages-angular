import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appClass]'
})
export class ClassDirective {

  @Input() set backgroundColor(newColor : string) {
    this.element.nativeElement.style.backgroundColor = newColor;
  }

  constructor(private element : ElementRef) {}

}
