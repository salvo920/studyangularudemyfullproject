import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from 'src/app/services/shoppingList/shopping-list.service';
import { CIngridients } from 'src/app/shared/CIngredients/CIngridients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingridients: CIngridients[] = []

  constructor(private shoppingListService: ShoppingListService) { }
  ngOnInit(): void {
    this.ingridients = this.shoppingListService.getIngridients();
    this.shoppingListService.ingridientsChange.subscribe(
      (ingridients: CIngridients[]) => { this.ingridients = ingridients }
    );
  }
}
