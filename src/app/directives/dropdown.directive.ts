import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[anDropdown]'
})
export class DropdownDirective {

private isOpen:boolean = false;

@HostBinding('class.open') get opened():boolean{
  return this.isOpen;
}

@HostListener('click') open(){
  this.isOpen = true;
}

@HostListener('mouseleave') close(){
  this.isOpen = false
}

  constructor() { }

}
