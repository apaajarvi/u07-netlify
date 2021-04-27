import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FavouriteListService } from '../favourite-list/favourite-list.service';
import { RecipesService } from '../recipes.service';
import { FavouriteListItemsService } from './favourite-list-items.service';

@Component({
  selector: 'app-favourite-list-items',
  templateUrl: './favourite-list-items.component.html',
  styleUrls: ['./favourite-list-items.component.css']
})
export class FavouriteListItemsComponent implements OnInit {

  constructor(private recipesService: RecipesService,
    private route: ActivatedRoute,
    private favouriteListService: FavouriteListService,
    private favouriteListItemsService: FavouriteListItemsService,
    private router: Router) { }

  favouriteListItems;
  listId;

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      const id = paramMap.get('id')
      this.listId = id;
      this.favouriteListService.getFavoruiteListById(id).subscribe((data: any) => {
        this.favouriteListItems = data.favouriteListItems
        console.log(data)
      })
    })

  }

  deleteFavouriteListItem(id: number) {
    this.favouriteListItemsService.deleteFavouriteListItem(id).subscribe(data => {
      console.log('hej')
      window.location.reload();

    });

  }

  // addItemToFavouriteList(listId, detailId, image, label, ingredients) {
  //   this.favouriteListItemsService.addItemToFavouriteList(listId, detailId, image, label, ingredients);
  // }


}
