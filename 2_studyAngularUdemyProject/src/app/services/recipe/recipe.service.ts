import { EventEmitter, Injectable } from '@angular/core';
import { CRecipe } from 'src/app/shared/CRecipe/CRecipe.model';
import { CIngridient } from 'src/app/shared/CIngredient/CIngridient.model';
import { ShoppingListService } from '../shoppingList/shopping-list.service';

@Injectable({
	providedIn: 'root'
})
export class RecipeService {
	recipeSelected = new EventEmitter<CRecipe>();
	private recipes: CRecipe[] = [
		new CRecipe("1 test Recipe ", "test Recipe describtion", "https://th.bing.com/th/id/OIP.zUQv6B5_-dU79I63_ALzPwHaJQ?pid=ImgDet&rs=1", [new CIngridient("Meat", 1), new CIngridient("French Fries", 20)]),
		new CRecipe("2 test Recipe ", "test Recipe describtion", "https://th.bing.com/th/id/OIP.zUQv6B5_-dU79I63_ALzPwHaJQ?pid=ImgDet&rs=1", [new CIngridient("Buns", 2), new CIngridient("Meat", 1)]),
		new CRecipe("3 test Recipe ", "test Recipe describtion", "https://th.bing.com/th/id/OIP.zUQv6B5_-dU79I63_ALzPwHaJQ?pid=ImgDet&rs=1", [new CIngridient("Buns", 2), new CIngridient("Meat", 1), new CIngridient("French Fries", 20)]),
	];


	constructor(private shoppingListService: ShoppingListService) {


	}

	getAllRecipes() {
		//  usiamo lo slice() vuoto perche cosi ritorniamo una copia dell'array , in modo da non modificare l'array originale in caso 
		// perche js se non si crea un nuovo array viene passato per referece ( lo stesso array originale ) e le modifiche lo andrebbero ad intaccare 
		return this.recipes.slice();
	}


	addIngridientsInShoppingList(ingridients: CIngridient[]) {
		this.shoppingListService.addIngridients(ingridients);
	}


}
