import { RecipeService } from '../../services/recipe.service';
import { Subscription } from 'rxjs/Rx';
import { ActivatedRoute } from '@angular/router';
import { ShoppingListService } from '../../services/shopping-list.service';
import { Recipe } from '../../models/recipe';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'an-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit, OnDestroy {
  private subscription:Subscription;
  public selectedRecipe:Recipe = null;
  private recipeIndex:number = null;
  constructor(private shoppingListService:ShoppingListService, 
  private activatedRoute: ActivatedRoute,
  private recipeService:RecipeService) { }

  ngOnInit() {
    this.subscription=  this.activatedRoute.params.subscribe(
      (params:any) =>{
          this.recipeIndex= params['id'];
          this.selectedRecipe = this.recipeService.getRecipe(this.recipeIndex);
      }
      ,
      (error) =>{
          console.log('Unable to get recipeIndex::' + error);
      }
    );
  }

public onAddToShoppingList():void{
  if(this.selectedRecipe)
  this.shoppingListService.addIngredients(this.selectedRecipe.ingredients);
}

ngOnDestroy(){
  this.subscription.unsubscribe();
}
}
