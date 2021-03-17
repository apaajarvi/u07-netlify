import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipe;

  constructor(private RecipesService: RecipesService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => { // Allt vi har i uri:n ligger nu i denna paramMap
      const id = paramMap.get('id')
      this.RecipesService.getRecipeById(id).subscribe(data => { // den andra subscriben, vi vill anv svaret från edamam för att ex spara vår property i recipeklassen. this.recipe är undef innan vi sätter den.
        this.recipe = data[0]
        console.log(data)
      })
    })
  }

  addToFavourites(recipe) {
    this.RecipesService.addToFavourites(recipe);
    window.alert('Your recipe was added to favourites');
  }



}
