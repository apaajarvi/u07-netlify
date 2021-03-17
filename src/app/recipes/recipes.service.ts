import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  items = [];

  apiKey: string;
  apiID: string;
  apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = environment.apiURL;
    this.apiKey = environment.apiKey;
    this.apiID = environment.apiID;
  }

  getRecipeById(id: string): Observable<any[]> {

    let url = `${this.apiUrl}app_id=${this.apiID}&app_key=${this.apiKey}&r=`
    console.log(url + encodeURIComponent(id))
    return this.http.get<any[]>(url + encodeURIComponent(id))
  }

  // Nedan tillhör favourie-list-funktioner:
  addToFavourites(recipe) {
    this.items.push(recipe);
  }

  getFavourites() {
    return this.items;
  }

  deleteOne(item) {
    this.items.splice(this.items.indexOf(x => x.uri === item.uri), 1)
  }

  clearFavourites() {
    this.items = [];
    console.log(this.items);
  }

}
