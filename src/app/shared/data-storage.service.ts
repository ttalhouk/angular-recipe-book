import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

import { RecipeService } from '../recipes/recipe.service';
import { AuthService } from '../auth/auth.service';
import { Recipe } from '../recipes/recipe.model';

import { firebaseUrl } from './globals';

@Injectable()
export class DataStorageSevice {
  constructor(private http: Http, private recipeService: RecipeService, private authService: AuthService){}
  endPoint = `${firebaseUrl}/recipies.json`;
  saveRecipes() {
    const token = this.authService.getToken();
    return this.http.put(`${this.endPoint}?auth=${token}`, this.recipeService.getRecipes());
  }
  fetchRecipes() {
    const token = this.authService.getToken();
    return this.http.get(`${this.endPoint}?auth=${token}`)
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
