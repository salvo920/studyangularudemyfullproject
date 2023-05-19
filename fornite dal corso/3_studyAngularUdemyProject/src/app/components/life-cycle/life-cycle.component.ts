import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.css']
})
export class LifeCycleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  /*
  Life cycle ngular : 

  1) ngOnChanges: è un gancio che puo essere eseguoti piu volte , viene eseguito all'inizio quando un nuovo componente viene creato , 
  ma dopo puo essere richiamato ogni volta che una propieta che usa il decoratore @Input cambia valore.

  2) ngOninit: viene chiamato quando il componente viene inizializzato , ma non è acora visibile nel DOM ,
   ma angular ha finito la sua inizializzazione di base , ora e possibile accedere alle sue propieta e inizializzarle ,
   quindi L'oggetto e stato creato , questo metodo viene chiamato dopo il costruttore.
   
  3)ngDoCheck: anche lui viene eseguito piu volte , è un hook(gancio) , verra eseguito ogni volta che  avviene il rilevamneto delle modifiche .
  il rilevamneto delle modifiche è il sistemate con cui angular rileva se e cambiato qualcosa sul modello di un componente o al suo interno. 
  ngDoCheck e un hook che viene eseguito su ogni controllo effettato da angular. 
  Ad esempio se cambia il valore di una propieta da 1 a 2 , angular deve reindirizzare quella parte del tempalte.
  ngDoCheck non viene usato solo al cambiamento di un valore ma anche al verifacasi di eventi se qualcosa e cambiato o qualche evento e stato emesso.
  Ad esempio: il click su qualcosa , l'attivazione di un timer , la risoluzione di un Observable .
  Si andra a verificare il codice e si andra ad eseguire il metodo ngDoCheck.
  Funziona molto bene e in modo efficente, non costa molto in termini di prestazioni.
  E un ottimo metodo da usare ad ogni ciclo di rilevamento modifiche , che  angular non sarebbe in grado di rilevare.

  4) ngAfterContentInit : Viene richiamto ogni volta che il contenuto tramite il tag ng-content viene inizializzato.
  Quindi quella parte del template del componente padre.

  5)ngAfterContentChecked : viene usato ogni volta che il rilevamento delle modifiche , verifica il contenuto 
  che stiamo proiettando dentro il nostro componente.

  6)ngAfterViewInit: viene eseguito quando il componente ha finito la sua inizializzazione , quindi la nostra view e stato rendirizzata.

  7)ngAfterViewChecked: viene eseguito ogni volta che la view viene controllata (fa un check ) , quindi la nostra view e stato rendirizzata.
  Ogni volta che tutte le modifiche che dovevano essere fatte sono state visualizzate nella vista o nessuna modifica e stata rllevata da angular
  se si distrugge un componente ad esempio con un ngif , ngAfterViewChecked viene impostato a false e rimosso dal Dom , e viene chiamato ngOnDestroy.

  8)ngOnDestroy: Questo e un ottimo posto per fare un po di pulizia , perche viene chiamato subito prima che l'oggetto venga distrutto da angular.

  */
}
