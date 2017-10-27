import { NgModule } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from '../app-routing.module';
import {SharedModule} from '../shared/shared.module';
import { HomeComponent } from './home/home.component';

import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { RecipeService } from '../recipes/recipe.service';
import { DataStorageSevice } from '../shared/data-storage.service';
import { AuthService } from '../auth/auth.service';
import { AuthGuard } from '../auth/auth-guard.service';

@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    AppRoutingModule,
    SharedModule
  ],
  exports: [
    AppRoutingModule,
    HeaderComponent
  ],
  providers: [
    ShoppingListService,
    RecipeService,
    DataStorageSevice,
    AuthService,
    AuthGuard
  ]
})
export class CoreModule { }
