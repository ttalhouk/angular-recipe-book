import { Component, OnInit, ElementRef, ViewChild, OnDestroy } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  // Alt approach
  // @ViewChild('nameInput') nameRef:ElementRef;
  // @ViewChild('quantityInput') quantityRef:ElementRef;

  @ViewChild('f') slForm: NgForm;

  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.shoppingListService.editIngredient.subscribe(
      (index: number) => {
        this.editedItemIndex = index;
        this.editMode = true;
        this.editedItem = this.shoppingListService.getIngredientByIndex(index);
        this.slForm.setValue({
          name: this.editedItem.name,
          quantity: this.editedItem.quantity
        })
      }
    )
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  addListItem(form: NgForm){
    // from template form
    const value = form.value;
    // from view refs
    // const newIngredientItem = new Ingredient(this.nameRef.nativeElement.value, this.quantityRef.nativeElement.value);
    if (this.editMode) {
      this.shoppingListService.updatedIngredient(this.editedItemIndex, new Ingredient(value.name, value.quantity));
    } else {
      this.shoppingListService.addNewIngredient(new Ingredient(value.name, value.quantity));
    }

    form.reset();
    this.editMode = false;

  }
  clearForm(){
    this.slForm.reset();
    this.editMode = false;
  }

  deleteItem() {
    if (this.editMode) {
      this.shoppingListService.removeIngredient(this.editedItemIndex);
    }
    this.clearForm();

  }

}
