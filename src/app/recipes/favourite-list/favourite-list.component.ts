import { Component, OnInit } from '@angular/core';
// import { RecipesService } from '../recipes.service';
import { FavouriteListService } from './favourite-list.service';

@Component({
  selector: 'app-favourite-list',
  templateUrl: './favourite-list.component.html',
  styleUrls: ['./favourite-list.component.css']
})


export class FavouriteListComponent implements OnInit {

  // items = this.recipesService.getFavourites();

  results;

  constructor(private FavouriteListService: FavouriteListService) { }

  ngOnInit(): void {
    this.results = this.FavouriteListService.favouriteLists
  }


  onSubmit(form) {
    this.FavouriteListService.addFavouriteList(form.value.title);
    // this.results.subscribe(data => console.log(data));
    // console.log(this.results)
  }

  deleteFavouriteList(id: number) {
    this.FavouriteListService.deleteFavouriteList(id);
  }

  updateFavouriteList(id: number, title: string) {
    this.FavouriteListService.updateFavouriteList(id, title);
  }
}
