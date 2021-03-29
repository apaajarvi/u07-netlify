import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.css']
})


export class RecipeFormComponent implements OnInit {

  querystring = '';

  results;

  recipeForm;

  constructor(private recipesService: RecipesService) { }

  ngOnInit(): void {
  }

  onSubmit(form) {
    this.results = this.recipesService.findRecipe(form.value.querystring, form.value.mealType, form.value.dietLabel, form.value.healthLabel);
    console.log(form.value);
  }

}