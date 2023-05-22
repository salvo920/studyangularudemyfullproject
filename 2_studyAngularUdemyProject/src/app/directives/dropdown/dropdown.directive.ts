import { Directive, ElementRef, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen: boolean = false;

  // adesso quando clicco al di fuori del target , ovvero il bottone del dropdown , il dropdown verra chiuso 
  @HostListener('document:click', ["$event"]) toggleMenu(event: Event) {
    this.isOpen = (this.elRef.nativeElement.contains(event.target)) ? !this.isOpen : false;
  }

  constructor(private elRef: ElementRef) { }




}


