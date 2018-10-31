import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appShowPassword]'
})
export class ShowPasswordDirective {
  private element: ElementRef;

  constructor(el: ElementRef) {
    this.element = el;
  }

  @HostListener('mouseover')
  showPassword() {
    this.element.nativeElement.type = 'text';
  }

  @HostListener('mouseout')
  hidePassword() {
    this.element.nativeElement.type = 'password';
  }

}
