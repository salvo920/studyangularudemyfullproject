import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from 'src/app/services/shoppingList/shopping-list.service';
import { CIngridient } from 'src/app/shared/CIngredient/CIngridient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingridients: CIngridient[] = []

  constructor(private shoppingListService: ShoppingListService) { }
  ngOnInit(): void {
    this.ingridients = this.shoppingListService.getIngridients();
    this.shoppingListService.ingridientsChange.subscribe(
      (ingridients: CIngridient[]) => { this.ingridients = ingridients }
    );
  }
}
