import { Component, OnInit, Output, EventEmitter, ElementRef, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  // Alt approach
  // @ViewChild('nameInput') nameRef:ElementRef;
  // @ViewChild('quantityInput') quantityRef:ElementRef;

  @Output() newIngredient = new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit() {
  }

  addListItem(name, quantity){
    // from view refs
    // const newIngredientItem = new Ingredient(this.nameRef.nativeElement.value, this.quantityRef.nativeElement.value);
    this.newIngredient.emit(new Ingredient(name, quantity));
  }

}
