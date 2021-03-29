import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

// environments är för att få in lösenorden
@Injectable({
  providedIn: 'root'
})
export class BasicsService {

  public query: string;

  apiKey: string;
  apiID: string;
  apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = environment.apiURL;
    this.apiKey = environment.apiKey;
    this.apiID = environment.apiID;
  }

  getRecipes(): Observable<any[]> {
    this.query = '&q=icecream&dishType=dessert';
    let url = `${this.apiUrl}app_id=${this.apiID}&app_key=${this.apiKey}` + this.query;

    console.log(url);
    return this.http.get<any[]>(url);
  }

}
