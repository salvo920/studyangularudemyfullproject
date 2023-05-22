import { AfterViewInit, Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { CIngridients } from 'src/app/shared/CIngredients/CIngridients.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements AfterViewInit {
  @ViewChild('nameInput') nameInputRef!: ElementRef
  @ViewChild('amountInput') amountInputRef!: ElementRef
  @Output() IngridientAdded = new EventEmitter<CIngridients>();
  /*
  nameInptuVar!: HTMLInputElement
  amountInputVar!: HTMLInputElement
  */


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
    this.IngridientAdded.emit(ingridient);

  }



}
