import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CRecipe } from '../../crecipe.model';
import { RecipeService } from 'src/app/services/recipe/recipe.service';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.css']
})
export class RecipesItemComponent {
  @Output() recipeItemClick = new EventEmitter<void>();
  @Input() recipe!: CRecipe

  constructor(private recipeService: RecipeService) { }


  emitRecipeName() {
    this.recipeService.recipeSelected.emit(this.recipe);
  }

}
