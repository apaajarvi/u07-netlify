import { Component, OnInit } from '@angular/core';
import { BasicsService } from '../basics.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private BasicsService: BasicsService) { }

  results;

  ngOnInit(): void {
    this.results = this.BasicsService.getRecipes();
  }

}
