import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavouriteListDetailsComponent } from './favourite-list-details/favourite-list-details.component';
import { FavouriteListComponent } from './favourite-list/favourite-list.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeFormComponent } from './recipe-form/recipe-form.component';

const recipesRoutes: Routes = [
  { path: 'recipe-form', component: RecipeFormComponent },
  { path: 'recipe-detail/:id', component: RecipeDetailComponent },
  { path: 'favourite-recipes', component: FavouriteListComponent },
  { path: 'favourite-lists/:id', component: FavouriteListDetailsComponent }

];

@NgModule({
  imports: [RouterModule.forChild(recipesRoutes)],
  exports: [RouterModule]
})
export class RecipesRoutingModule { }
