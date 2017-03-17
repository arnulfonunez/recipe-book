import { Ingredient } from '../models/ingredient';
import { Injectable } from '@angular/core';

@Injectable()
export class ShoppingListService {
  private ingredientList:Ingredient[] = [];

  constructor() { }

  public getIngredientList():Ingredient[]{
    return this.ingredientList;
  }

  public addIngredient(ingredient:Ingredient):void{
    this.ingredientList.push(ingredient);
  }
  public addIngredients(ingredients:Ingredient[]):void{
    //Array.prototype.push.apply(this.ingredientList,ingredients);
    this.ingredientList.push(...ingredients);
  }

  public deleteIngredientByIndex(index:number):void{
    this.ingredientList.splice(index,1);
  }

  public deleteIngredient(ingredient:Ingredient):void{
    //Check if the index is not negative because splice will delete items from the array
    //even if the indcex is negative. Negative index means that the delete will start from the end of the array.
    let index:number = this.ingredientList.indexOf(ingredient);
    if(index >= 0){
      this.ingredientList.splice(index,1);
    }

  }

}