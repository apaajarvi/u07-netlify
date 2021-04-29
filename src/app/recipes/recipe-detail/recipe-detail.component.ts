import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AuthStateService } from 'src/app/shared/auth-state.service';
import { FavouriteListItemsService } from '../favourite-list-items/favourite-list-items.service';
import { FavouriteListService } from '../favourite-list/favourite-list.service';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})

export class RecipeDetailComponent implements OnInit {
  isSignedIn: boolean;
  recipe;
  lists;
  responseText = [];

  constructor(private recipesService: RecipesService,
    private route: ActivatedRoute,
    private favouriteListService: FavouriteListService,
    private favouriteListItemsService: FavouriteListItemsService,
    private router: Router,
    private auth: AuthStateService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      const id = paramMap.get('id')
      this.recipesService.getRecipeById(id).subscribe(data => {
        this.recipe = data[0]
      })
      this.lists = this.favouriteListService.favouriteLists
    })
    this.auth.userAuthState.subscribe(val => {
      this.isSignedIn = val;
    });
  }

  onSubmit(form) {
    const arrayOfListIds = [];

    for (let key in form.value) {
      if (form.value[key] === true) {
        arrayOfListIds.push(key)
      }
      console.log(arrayOfListIds)
    }

    for (let i = 0; i < arrayOfListIds.length; i++) {
      this.favouriteListItemsService.addItemToFavouriteList(
        arrayOfListIds[i],
        this.recipe.uri,
        this.recipe.image,
        this.recipe.label,
        this.recipe.ingredientLines.join(' ')
      )
        .subscribe((data: any) => {
          this.favouriteListService.getAllFavouriteLists();
          this.responseText.push(data.message);
        })
    }
  }

}
