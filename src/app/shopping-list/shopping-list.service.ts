import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('salt', 10),
    new Ingredient('tomato', 5)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addNewIngredient(ingredient){
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  addToList(ingredients){
    this.ingredients = [...this.ingredients, ...ingredients];
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

}
