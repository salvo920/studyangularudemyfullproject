import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  counterActiveToInactive: number = 0
  counterInactiveToActive: number = 0

  constructor() { }

  IncreasecounterActiveToInactive() {
    this.counterActiveToInactive++;
    console.log("Inactive to Active:", this.counterActiveToInactive)

  }

  IncreaseCounterInactiveToActive() {
    this.counterInactiveToActive++;
    console.log("Active to Inactive :", this.counterInactiveToActive)
  }





}
