import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Response } from '@angular/http';

import { DataStorageSevice } from '../shared/data-storage.service';
import { AuthService } from '../auth/auth.service';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private router: Router,
    private recipeService: RecipeService,
    private dataStorageService: DataStorageSevice,
    private authService:AuthService) { }

  ngOnInit() {
  }

  onSave(){
    this.dataStorageService.saveRecipes()
      .subscribe((response: Response) => {
        console.log(response.json());
      });
  }
  onFetch(){
    this.dataStorageService.fetchRecipes();
  }
  onLogout(){
    this.authService.logout();
  }
}
