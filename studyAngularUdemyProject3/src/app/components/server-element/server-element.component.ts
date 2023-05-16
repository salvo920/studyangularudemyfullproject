import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

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
export class ServerElementComponent implements OnInit {
  @Input('serverElement') element: { type: string, name: string, content: string }
  constructor() { }

  ngOnInit(): void {
  }

}
