import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../recipes.service';


@Component({
  selector: 'app-favourite-list',
  templateUrl: './favourite-list.component.html',
  styleUrls: ['./favourite-list.component.css']
})


export class FavouriteListComponent implements OnInit {

  items = this.recipesService.getFavourites();

  results;

  constructor(private recipesService: RecipesService) { }

  ngOnInit(): void {
  }

  // deleteOneFavourite(item) {
  //   this.recipesService.deleteOne(item);
  // }

  // clearFavourites() {
  //   this.recipesService.clearFavourites();
  //   this.items = this.recipesService.getFavourites();
  // }

  onSubmit(form) {
    this.results = this.recipesService.findRecipe(form.value.title);
    this.results.subscribe(data => console.log(data));

  }

  // onSubmit(form) {
  //   this.results = this.recipesService.findRecipe(form.value.querystring, form.value.mealType, form.value.dietLabel, form.value.healthLabel);
  //   console.log(form.value);
  // }


}
