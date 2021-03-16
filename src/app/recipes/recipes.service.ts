import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  apiKey: string;
  apiID: string;
  apiUrl: string;

  constructor() {
    this.apiUrl = environment.apiURL;
    this.apiKey = environment.apiKey;
    this.apiID = environment.apiID;
  }
}
