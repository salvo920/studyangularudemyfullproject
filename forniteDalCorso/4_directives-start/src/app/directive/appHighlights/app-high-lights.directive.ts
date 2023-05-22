import { Directive, ElementRef, OnInit } from '@angular/core';

// nel selector viene usato [] per poterlo richiare nell'elemento html come un attributo.

@Directive({
  selector: '[appAppHighLights]'
})
export class AppHighLightsDirective implements OnInit {

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
    // questo modo per accedere al DOM prima che venga creato e scongliato su angular 
    this.elementRef.nativeElement.style.backgroundColor = "green";
  }

}
