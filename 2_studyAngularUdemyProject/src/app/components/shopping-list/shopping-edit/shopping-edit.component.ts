import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ShoppingListService } from 'src/app/services/shoppingList/shopping-list.service';
import { CIngridients } from 'src/app/shared/CIngredients/CIngridients.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements AfterViewInit {
  @ViewChild('nameInput') nameInputRef!: ElementRef
  @ViewChild('amountInput') amountInputRef!: ElementRef
  /*
  nameInptuVar!: HTMLInputElement
  amountInputVar!: HTMLInputElement
  */
  constructor(private shoppingListService: ShoppingListService) { }

  ngAfterViewInit() {
    console.log("nameInput:", this.nameInputRef.nativeElement);
    console.log("amountInput:", this.amountInputRef.nativeElement);


  }
  /*
  addElement(nameInptuVar: HTMLInputElement, amountInputVar: HTMLInputElement) {
    this.nameInptuVar = nameInptuVar
    this.amountInputVar = amountInputVar
  }
  */

  onAddingIngridient() {
    const ingName = this.nameInputRef.nativeElement.value
    const ingAmount = this.amountInputRef.nativeElement.value
    const ingridient: CIngridients = new CIngridients(ingName, ingAmount);
    this.shoppingListService.addIngridient(ingridient);
  }



}
