import { Component, OnInit } from '@angular/core';
import { CRecipe } from '../../shared/CRecipe/CRecipe.model';
import { RecipeService } from 'src/app/services/recipe/recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  recipeItem !: CRecipe

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    //effettuiamo il subscrbe per ascoltare quando l'evento viene emesso , inoltre lo possiamo fare 
    // perche questa e la stessa istanza condivisa con tutti gli elementi recipe della classe recipeService 
    this.recipeService.recipeSelected.subscribe((recipe: CRecipe) => this.recipeItem = recipe);
  }


}
