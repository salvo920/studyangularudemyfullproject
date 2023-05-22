import { Component } from '@angular/core';
import { CIngridients } from 'src/app/shared/CIngredients/CIngridients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
  ingridients: CIngridients[] = [
    new CIngridients('Apple', 10),
    new CIngridients('Mango', 6),
    new CIngridients('Fragole', 4),
  ]

  onIngridientAdded(ingridient: CIngridients) {
    this.ingridients.push(ingridient);
  }

}
