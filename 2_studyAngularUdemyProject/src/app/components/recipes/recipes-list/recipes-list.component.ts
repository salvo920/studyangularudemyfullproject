import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CRecipe } from '../crecipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  @Output() emitRecipeName = new EventEmitter<CRecipe>();
  recipes: CRecipe[] = [
    new CRecipe("1 test Recipe ", "test Recipe describtion", "https://th.bing.com/th/id/OIP.zUQv6B5_-dU79I63_ALzPwHaJQ?pid=ImgDet&rs=1"),
    new CRecipe("2 test Recipe ", "test Recipe describtion", "https://th.bing.com/th/id/OIP.zUQv6B5_-dU79I63_ALzPwHaJQ?pid=ImgDet&rs=1"),
    new CRecipe("3 test Recipe ", "test Recipe describtion", "https://th.bing.com/th/id/OIP.zUQv6B5_-dU79I63_ALzPwHaJQ?pid=ImgDet&rs=1"),
  ];

  constructor() {

  }
  ngOnInit(): void {
  }

  OnclickedRecipe(recipeSelect: CRecipe) {
    // this.OnclickedRecipe.emit();
    console.log("recipeName list :", recipeSelect);
    this.emitRecipeName.emit(recipeSelect);
  }

}
