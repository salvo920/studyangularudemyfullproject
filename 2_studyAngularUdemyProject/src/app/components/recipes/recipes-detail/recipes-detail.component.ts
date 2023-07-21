import { Component, Input } from '@angular/core';
import { CRecipe } from '../../../shared/CRecipe/CRecipe.model';
import { RecipeService } from 'src/app/services/recipe/recipe.service';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent {
  @Input() recipeSelected!: CRecipe

  constructor(private recipeService: RecipeService) { }

  onAddRecipeShoppingList() {
    this.recipeService.addIngridientsInShoppingList(this.recipeSelected.ingridients);
  }

}
