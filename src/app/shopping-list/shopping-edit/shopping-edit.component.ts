import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  // Alt approach
  // @ViewChild('nameInput') nameRef:ElementRef;
  // @ViewChild('quantityInput') quantityRef:ElementRef;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  addListItem(name, quantity){
    // from view refs
    // const newIngredientItem = new Ingredient(this.nameRef.nativeElement.value, this.quantityRef.nativeElement.value);

    this.shoppingListService.addNewIngredient(new Ingredient(name, quantity));
  }

}
