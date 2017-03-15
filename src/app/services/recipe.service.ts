import { Recipe } from '../models/recipe';
import {Ingredient} from '../models/ingredient';
import { Injectable,EventEmitter } from '@angular/core';

@Injectable()
export class RecipeService {

private recipeList:Recipe[] = [];
public recipeSelected:EventEmitter<Recipe> = new EventEmitter<Recipe>();

  constructor() { 

    let limit:number = 5;
  let ingredientLimit:number = 5;

  for(let i =0; i < limit;i++){
    let tempIng:Ingredient[] = [];
    for(let j=0; j < ingredientLimit; j++){
      tempIng.push(new Ingredient('' + i + '_' + j, j));
    }
   this.recipeList.push(new Recipe('Recipe:' + i, 'Description:' + i,'',tempIng));
  }
  }

  public getRecipeList():Recipe[]{
  return this.recipeList;
}

public pushSelectedRecipe(recipe:Recipe):void{
  this.recipeSelected.emit(recipe);
}



}
