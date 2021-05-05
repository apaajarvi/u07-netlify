import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

interface ApiResponce {
  data: any[]
}


@Injectable({
  providedIn: 'root'
})
export class FavouriteListService {

  private favouriteListSubject: BehaviorSubject<any[]>
  public favouriteLists: Observable<any[]>

  constructor(private http: HttpClient, private router: Router) {
    this.favouriteListSubject = new BehaviorSubject<any[]>([]);
    this.favouriteLists = this.favouriteListSubject.asObservable();
  }


  public get favouriteListsValue(): any[] {
    return this.favouriteListSubject.value
  }


  public set favouriteListSubjectValue(value: any) {
    this.favouriteListSubject.next(value);
  }


  addFavouriteList(title: string) {
    return this.http.post('https://recipe-api-backend.herokuapp.com/api/auth/favourite-lists', { title: title })
      .subscribe(data => { this.getAllFavouriteLists() })
  }

  getAllFavouriteLists() {
    return this.http.get('https://recipe-api-backend.herokuapp.com/api/auth/favourite-lists').subscribe((data: ApiResponce) => {
      console.log(data)
      this.favouriteListSubject.next(data.data)
    });
  }

  deleteFavouriteList(id: number) {
    return this.http.delete('https://recipe-api-backend.herokuapp.com/api/auth/favourite-lists/' + id).subscribe(data => {
      console.log(data)
      this.getAllFavouriteLists();
    })
  }

  updateFavouriteList(id: number, title: string) {
    console.log(id, title)
    return this.http.put('https://recipe-api-backend.herokuapp.com/api/auth/favourite-lists/' + id, { title: title }).subscribe(data => {
      console.log(data)
      this.getAllFavouriteLists();
      this.router.navigate(['/favourite-recipes']);
    })
  }

  getFavouriteListById(id: string) {
    return this.http.get('https://recipe-api-backend.herokuapp.com/api/auth/favourite-lists/' + id)
  }
}
