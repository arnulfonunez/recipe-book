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

  @Output() public recipeSelected:EventEmitter<Recipe> = new EventEmitter<Recipe>();

  public recipes:Recipe[] = [];
  
  constructor() { }

  ngOnInit() {
    this.recipes = this.getRecipeList();
  }

public onSelected(selectedRecipe:Recipe):void{
 this.recipeSelected.emit(selectedRecipe);
}

//remove this method
private getRecipeList():Recipe[]{
  let retVal:Recipe[]=[];
  let limit:number = 2;
  let ingredientLimit:number = 2;

  for(let i =0; i < limit;i++){
    let tempIng:Ingredient[] = [];
    for(let j=0; j < ingredientLimit; j++){
      tempIng.push(new Ingredient('' + i + '_' + j, j));
    }
    retVal.push(new Recipe('Recipe:' + i, 'Description:' + i,'',tempIng));
  }

return retVal;
}


}
