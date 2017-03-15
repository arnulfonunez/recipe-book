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

  public deleteIngredient(index:number):void{
    this.ingredientList.splice(index,1);
  }
  

}
