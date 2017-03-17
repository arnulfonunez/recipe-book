import { ShoppingListService } from '../../services/shopping-list.service';
import { Ingredient } from '../../models/ingredient';
import { NgForm } from '@angular/forms/src/directives';
import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'an-shopping-list-add',
  templateUrl: './shopping-list-add.component.html',
  styleUrls: ['./shopping-list-add.component.css']
})
export class ShoppingListAddComponent implements OnInit, OnChanges {

@Input() public ingredient:Ingredient = null;
public isAdd:boolean = true;

 constructor(private shoppingListService:ShoppingListService) { }

  ngOnInit() {
  }
 
//This method is called every time that an input element is changed. 
ngOnChanges(changes){
  if(changes.ingredient.currentValue === null){
    this.isAdd = true;
  }
  else{
    this.isAdd = false;
  }
}

  public onSubmit(ingredient:Ingredient):void{
    console.log(ingredient.amount);
    if(this.isAdd){
      this.ingredient = new Ingredient(ingredient.name,ingredient.amount);
        this.shoppingListService.addIngredient(this.ingredient);
    }
  }

  

}
