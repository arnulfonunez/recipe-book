import { RecipeService } from '../../services/recipe.service';
import { Ingredient } from '../../models/ingredient';
import { EventEmitter } from '@angular/common/src/facade/async';
import { Recipe } from '../../models/recipe';
import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'an-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  

  public recipes:Recipe[] = [];
  
  constructor(private recipeService:RecipeService) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipeList();
  }

public onSelected(selectedRecipe:Recipe):void{
 this.recipeService.pushSelectedRecipe(selectedRecipe);
}



}
