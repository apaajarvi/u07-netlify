import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RecipesRoutingModule } from './recipes-routing.module';
import { RecipeFormComponent } from './recipe-form/recipe-form.component';
import { FavouriteListComponent } from './favourite-list/favourite-list.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { FavouriteListDetailsComponent } from './favourite-list-details/favourite-list-details.component';
import { FavouriteListItemsComponent } from './favourite-list-items/favourite-list-items.component';

@NgModule({
  declarations: [
    RecipeFormComponent,
    FavouriteListComponent,
    RecipeDetailComponent,
    FavouriteListDetailsComponent,
    FavouriteListItemsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RecipesRoutingModule,
  ]
})
export class RecipesModule { }
