import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CRecipe } from '../../crecipe.model';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.css']
})
export class RecipesItemComponent {
  @Output() recipeItemClick = new EventEmitter<void>();
  @Input() recipe!: CRecipe


  emitRecipeName() {
    this.recipeItemClick.emit();
  }

}
