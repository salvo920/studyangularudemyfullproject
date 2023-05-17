import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  /**
    l'encapuslation del tipo shadow : angular usa l'encapuslation del tipo shadow sul Dom ovvero aggiunge degli attributi personalizzati ad un componente 
    e le regole css sono limitate a quel componente , possiamo disabilare questo cimportamento rendendo il css globale usando 
    encapsulation: ViewEncapsulation.None ma questa non e l'unico valore possibile , ecco i possibili valori : 
    None : non esegue lo shadow del DOM e il css vale come css globale , come funziona normalmente 
    Emulated : esegue lo shadow del dom normale di angular e il css vale solo per il componente , di default e attivo l'Emulated   
    ShadowDom : esegue lo shadow del dom tramite le api del browser e il css vale solo per il componente 
  */
  // encapsulation: ViewEncapsulation.none


})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit,
  AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input('serverElement') element: { type: string, name: string, content: string }
  @Input() serverName: string
  constructor() {
    console.log("constructor called")
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges called")
    console.log("changes value:", changes)
  }

  ngOnInit(): void {
    console.log("ngOnInit called")
  }

  ngDoCheck(): void {
    console.log("ngDoCheck called")
  }

  ngAfterContentInit(): void {
    console.log("ngAfterContentInit called")
  }

  ngAfterContentChecked(): void {
    console.log("AngfterContentChecked called")
  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit called")
  }

  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked called")
  }

  ngOnDestroy(): void {
    console.log("ngOnDestroy called")
  }
}
