import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CRecipe } from '../crecipe.model';
import { RecipeService } from 'src/app/services/recipe/recipe.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  @Output() emitRecipeName = new EventEmitter<CRecipe>();
  recipes: CRecipe[] = [];

  constructor(private recipeService: RecipeService) {

  }
  ngOnInit(): void {
    this.recipes = this.recipeService.getAllRecipes();
  }

  OnclickedRecipe(recipeSelect: CRecipe) {
    // this.OnclickedRecipe.emit();
    console.log("recipeName list :", recipeSelect);
    this.emitRecipeName.emit(recipeSelect);
  }

}
