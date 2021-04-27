import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FavouriteListItemsService } from '../favourite-list-items/favourite-list-items.service';
import { FavouriteListService } from '../favourite-list/favourite-list.service';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})

export class RecipeDetailComponent implements OnInit {

  recipe;
  lists;

  constructor(private recipesService: RecipesService,
    private route: ActivatedRoute,
    private favouriteListService: FavouriteListService,
    private favouriteListItemsService: FavouriteListItemsService,
    private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      const id = paramMap.get('id')
      this.recipesService.getRecipeById(id).subscribe(data => {
        this.recipe = data[0]
        console.log(data)
      })
      this.lists = this.favouriteListService.favouriteLists
      console.log(this.lists)
    })
  }


  onSubmit(form) {
    const arrayOfListIds = []; // Beh eg inte då man kan köra direkt på if-satsen och göra requests.

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
        this.recipe.ingredientLines.join(' ') // denna gör att vår array (som ingredientLines är) blir en string med mellanslag mellan orden. Db kan inte ta emot en array.
      ) // viktigt att ovan kommer i den ordning som gäller för additemtofavouritelist, här hämtar vi rådatan från recept-svaret.
    }
  }

  // addToFavourites(recipe) {
  //   this.recipesService.addToFavourites(recipe);
  // }

  // addItemToFavouriteList(listId: number, detailId: string, image: string, label: string, ingredients: string) {
  //   this.favouriteListItemsService.addItemToFavouriteList(listId, detailId, image, label, ingredients);
  // }

}
