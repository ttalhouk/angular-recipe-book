import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Recipe} from '../recipe.model';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a test desc', 'https://c.pxhere.com/photos/47/8d/fillet_meat_recipe_eat_fillet_of_heidschnucke-762027.jpg!d'),
    new Recipe('Another Recipe', 'This is also a test desc', 'https://cdn.pixabay.com/photo/2014/12/21/23/28/recipe-575434_1280.png')
  ];

  @Output() selectedRecipe = new EventEmitter<Recipe>();
  constructor() { }

  ngOnInit() {
  }

  onSelectRecipe(selectedRecipe){
    this.selectedRecipe.emit(selectedRecipe);
  }

}
