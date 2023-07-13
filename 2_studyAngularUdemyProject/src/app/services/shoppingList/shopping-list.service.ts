import { EventEmitter, Injectable, Output } from '@angular/core';
import { CIngridients } from 'src/app/shared/CIngredients/CIngridients.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  @Output() ingridientsChange = new EventEmitter<CIngridients[]>()
  private ingridients: CIngridients[] = [
    new CIngridients('Apple', 10),
    new CIngridients('Mango', 6),
    new CIngridients('Fragole', 4),
  ]

  constructor() { }

  getIngridients() {
    // restituiamo una copia dell'array originale 
    return this.ingridients.slice();
  }

  addIngridient(ingridient: CIngridients) {
    this.ingridients.push(ingridient);
    this.ingridientsChange.emit(this.ingridients.slice());
  }
}
