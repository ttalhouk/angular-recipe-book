import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';

import { firebaseUrl } from './globals';

@Injectable()
export class DataStorageSevice {
  constructor(private http: Http, private recipeService: RecipeService){}
  endPoint = `${firebaseUrl}/recipies.json`
  saveRecipes() {
    return this.http.put(this.endPoint, this.recipeService.getRecipes());
  }
  fetchRecipes() {
    return this.http.get(this.endPoint)
      .map((response: Response) => {
        const recipes: Recipe[] = response.json();
        for(let recipe of recipes){
          if (!recipe['ingredients']){
            recipe['ingredients'] = [];
          }
          return recipes;
        }
      })
      .subscribe((recipes: Recipe[]) => {
        this.recipeService.setRecipes(recipes);
      });
  }
}
