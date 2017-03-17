import { Recipe } from '../models/recipe';
import {Ingredient} from '../models/ingredient';
import { Injectable,EventEmitter } from '@angular/core';

@Injectable()
export class RecipeService {

private recipeList:Recipe[] = [];
public recipeSelected:EventEmitter<Recipe> = new EventEmitter<Recipe>(); //no longer used

  constructor() { 

    //Start
    let limit:number = 5;
    let ingredientLimit:number = 5;
    for(let i =0; i < limit;i++){
      let tempIng:Ingredient[] = [];
      for(let j=0; j < ingredientLimit; j++){
        tempIng.push(new Ingredient('' + i + '_' + j, j));
      }
    this.recipeList.push(new Recipe('Recipe:' + i, 'Description:' + i,'',tempIng));
    }
    //End
  }

  public getRecipeList():Recipe[]{
  return this.recipeList;
}

//No longer used
public pushSelectedRecipe(recipe:Recipe):void{
  this.recipeSelected.emit(recipe);
}

public getRecipe(index:number): Recipe{
  return this.recipeList[index];
}
public deleteRecipeByIndex(index:number): void{
  this.recipeList.splice(index,1);
}

public deleteRecipe(recipe:Recipe): void{
  //check if the index is not negative because splice will delete items from the array even if the 
  //index is negative. Negative index means that the delete will start from the end of the array.
 let index:number =   this.recipeList.indexOf(recipe);
  if(index >=0){
      this.recipeList.splice(index,1);
  }
}



public addRecipe(recipe:Recipe):void{
  this.recipeList.push(recipe);
}
}
