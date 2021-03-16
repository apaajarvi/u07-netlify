import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavouriteListComponent } from './favourite-list/favourite-list.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeFormComponent } from './recipe-form/recipe-form.component';

const recipesRoutes: Routes = [
  { path: 'recipe-form', component: RecipeFormComponent },
  { path: 'recipe-detail/:id', component: RecipeDetailComponent },
  { path: 'favourite-recipes', component: FavouriteListComponent },

];

@NgModule({
  imports: [RouterModule.forChild(recipesRoutes)],
  exports: [RouterModule]
})
export class RecipesRoutingModule { }
