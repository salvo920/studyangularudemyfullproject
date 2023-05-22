import { Component } from '@angular/core';
import { CRecipe } from './crecipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent {
  recipeItem !: CRecipe
  RecipeNameGoInDetails(recipeItem: CRecipe) {
    console.log("recipeName parent :", recipeItem);

    this.recipeItem = recipeItem

  }

}
