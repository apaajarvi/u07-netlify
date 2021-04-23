import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FavouriteListService {

  constructor(private http: HttpClient) { }

  addFavouriteList(title: string) {
    return this.http.post('http://127.0.0.1:80/api/auth/favourite-recipes', { title: title });
  }
}
