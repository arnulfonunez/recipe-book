import { Subscription } from 'rxjs/Rx';
import { RecipeService } from '../../services/recipe.service';
import { Ingredient } from '../../models/ingredient';
import { EventEmitter } from '@angular/common/src/facade/async';
import { Recipe } from '../../models/recipe';
import { Component, OnDestroy, OnInit, Output } from '@angular/core';

@Component({
  selector: 'an-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {

  private subscription:Subscription = null;
  public recipes:Recipe[] = [];
  
  constructor(private recipeService:RecipeService) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipeList();

    this.subscription =  this.recipeService.recipesRefreshed.subscribe(
      (data) =>
      {
        this.recipes = this.recipeService.getRecipeList();
      }
      ,
      (error) =>{
        console.log('Unable to refresh recipe list');
      }
    );


  }

public onSelected(selectedRecipe:Recipe):void{
 //this.recipeService.pushSelectedRecipe(selectedRecipe);
}

ngOnDestroy(){
  this.subscription.unsubscribe();
}

}
