import { EventEmitter, Injectable, Output } from '@angular/core';
import { CIngridient } from 'src/app/shared/CIngredient/CIngridient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  @Output() ingridientsChange = new EventEmitter<CIngridient[]>()
  private ingridients: CIngridient[] = [
    new CIngridient('Apple', 10),
    new CIngridient('Mango', 6),
    new CIngridient('Fragole', 4),
  ]

  constructor() { }

  getIngridients() {
    // restituiamo una copia dell'array originale 
    return this.ingridients.slice();
  }

  addIngridient(ingridient: CIngridient) {
    this.ingridients.push(ingridient);
    this.ingridientsChange.emit(this.ingridients.slice());
  }

  addIngridients(ingridients: CIngridient[]) {
    this.ingridients.push(...ingridients) // lo spread operator aggiunge gli elementi di un array uno alla volta 
    this.ingridientsChange.emit(this.ingridients.slice());
  }
}
