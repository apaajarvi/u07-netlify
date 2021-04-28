import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { FavouriteListService } from '../favourite-list/favourite-list.service';

@Injectable({
  providedIn: 'root'
})
export class FavouriteListItemsService {

  constructor(private http: HttpClient,
    private favouriteListService: FavouriteListService,
    private router: Router) { }

  addItemToFavouriteList(listId: string, detailId: string, image: string, label: string, ingredients: string) {
    return this.http.post('http://127.0.0.1:80/api/auth/favourite-list-items', {
      favourite_list_id: listId,
      recipe_detail_id: detailId,
      recipe_image: image,
      recipe_label: label,
      recipe_ingredientLines: ingredients
    })

  }

  deleteFavouriteListItem(id: number) {

    return this.http.delete('http://127.0.0.1:80/api/auth/favourite-list-items/' + id)


    // this.router.navigate(['/favourite-list-items', id])

  }


}
