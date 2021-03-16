import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipesRoutingModule } from './recipes-routing.module';
import { RecipeFormComponent } from './recipe-form/recipe-form.component';
import { FavouriteListComponent } from './favourite-list/favourite-list.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipesListComponent } from './recipes-list/recipes-list.component';



@NgModule({
  declarations: [
    RecipeFormComponent,
    FavouriteListComponent,
    RecipeDetailComponent,
    RecipesListComponent

  ],
  imports: [
    CommonModule,
    RecipesRoutingModule
  ]
})
export class RecipesModule { }
