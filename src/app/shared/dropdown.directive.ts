import {Directive, ElementRef, HostListener, Renderer2, Input, HostBinding} from '@angular/core';
import {isBoolean} from 'util';

@Directive({
  selector : '[appDropDown]'
})
export class DropdownDirective {
  @HostBinding('class.open')isOpen = false;


@HostListener('click')toggleOpen() {
  this.isOpen = !this.isOpen;
   }
}
