import { Directive, OnInit, Renderer2, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighLights]'
})
export class BetterHighLightsDirective implements OnInit {
  // se il valore della propieta viene preso da un @Input possiamo impostarle personalizzate 
  // per ogni componente 
  @Input() defaultColor: string = "transparent";
  // assegnado ad un @input l'alias del nome della propieta , quando lo richiamao nell'html su quella 
  // propieta  e possibbile fare databinding , ovvero legare un valore 
  // se questo non viene fatto non e necessario usare le parentesi [] nel richiamare l'attributo HTML appBetterHighLights 
  @Input('appBetterHighLights') highLights: string = "blue";


  // effettuiamo il bind dell'elemento a cui e stata applicata la propieta 
  // e a quell'elemento andiamo a prendere lo style.backgroundColor , definito tra le ()
  // a seguito andiamo a definire una variabile typescript che sara il suo valore 

  @HostBinding('style.backgroundColor') backgroundColor: string;

  constructor(private render: Renderer2, private element: ElementRef) { }

  ngOnInit() {
    // lo inizializziamo qui la propieta di @HostBinding  cosi i valori che provengono dall'HTML saranno attivi subito  
    this.backgroundColor = this.defaultColor;
    // questo modo e qullo consigliato per accedere agli elementi del DOM prima che venga creato 
    // this.render.setStyle(this.element.nativeElement, 'background-color', 'blue');
  }

  // le direttive si possono legare agli eventi tramite l'HostListener, per rendere un elemento html reattivo  
  // entrambi i metodi vanno bene per modifcare il DOM prima che venga creato, usando il secondo la sintassi 
  // più semplice e breve 
  @HostListener('mouseover') muoseover() {
    // this.render.setStyle(this.element.nativeElement, 'background-color', 'blue');
    this.backgroundColor = this.highLights;
  }

  @HostListener('mouseleave') mouseleave() {
    // this.render.setStyle(this.element.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = this.defaultColor;

  }

}
