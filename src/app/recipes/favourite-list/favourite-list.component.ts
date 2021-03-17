import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-favourite-list',
  templateUrl: './favourite-list.component.html',
  styleUrls: ['./favourite-list.component.css']
})
export class FavouriteListComponent implements OnInit {

  items = this.RecipesService.getFavourites();

  constructor(private RecipesService: RecipesService) { }

  ngOnInit(): void {
  }

  deleteOneFavourite(item) {
    this.RecipesService.deleteOne(item);
  }

  clearFavourites() {
    this.RecipesService.clearFavourites();
    this.items = this.RecipesService.getFavourites();
  }

}
