import { ShoppingListService } from '../services/shopping-list.service';
import { Ingredient } from '../models/ingredient';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'an-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  public ingredientList:Ingredient[] = [];
  public selectedIngredient:Ingredient = null;

  constructor(private shoppingListService:ShoppingListService) { }

  ngOnInit() {
    this.ingredientList = this.shoppingListService.getIngredientList();
  }

public onSelectedIngredient(ingredient:Ingredient):void{
 this.selectedIngredient = ingredient;
}

}
