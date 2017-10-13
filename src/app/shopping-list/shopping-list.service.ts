import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs/Subject'

export class ShoppingListService {
  // ingredientsChanged = new EventEmitter<Ingredient[]>();

  editIngredient = new Subject<number>();
  ingredientsChanged = new Subject<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('salt', 10),
    new Ingredient('tomato', 5)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  getIngredientByIndex(index){
    return this.ingredients[index];
  }

  addNewIngredient(ingredient){
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addToList(ingredients){
    this.ingredients = [...this.ingredients, ...ingredients];
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  updatedIngredient(index: number, newIngredient :Ingredient) {
    this.ingredients[index] = newIngredient;
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  removeIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

}
