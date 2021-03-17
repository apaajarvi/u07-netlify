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
    console.log(recipe);
    this.items.push(recipe);
    console.log(this.items);
  }

  getFavourites() {
    console.log(this.items);
    return this.items;
  }

  deleteOne(item) {
    this.items.splice(this.items.indexOf(x => x.uri === item.uri), 1)
  }

  clearFavourites() {
    this.items = [];
    console.log(this.items);
  }

  findRecipe(q: string, mealType = null, dietLabel = null, healthLabel = null): Observable<any[]> {
    // let apiUrl = constants.apiURL;
    // let apiKey = environment.apiKey;
    // let apiID = environment.apiID;
    const mealTypeString = mealType !== "" ? "&mealType=" + mealType : "";
    const query = q ? q : "";
    const dietLabelString = dietLabel !== "" ? "&dietLabels=" + dietLabel : "";
    const healthLabelString = healthLabel !== "" ? "&healthLabels=" + healthLabel : "";

    let url = `${this.apiUrl}app_id=${this.apiID}&app_key=${this.apiKey}&q=` + query + mealTypeString + dietLabelString + healthLabelString;

    console.log(url);
    return this.http.get<any[]>(url);
  }


}
