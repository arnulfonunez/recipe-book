import { RecipeService } from '../services/recipe.service';
import { Recipe } from '../models/recipe';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'an-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

 public selectedRecipe:Recipe = null;
  constructor(private recipeService:RecipeService) { }

  ngOnInit() {
    this.recipeService.recipeSelected.subscribe(
      (data) =>{
        this.selectedRecipe = data;
        console.log('test');
      }
      ,(error) => {console.log('An error occured.');}
    );
  }

}
