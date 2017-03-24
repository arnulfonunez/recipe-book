import { EventEmitter } from '@angular/core';
import { ShoppingListService } from '../../services/shopping-list.service';
import { Ingredient } from '../../models/ingredient';
import { NgForm } from '@angular/forms/src/directives';
import { Component, Input, OnChanges, OnInit, Output } from '@angular/core';

@Component({
  selector: 'an-shopping-list-add',
  templateUrl: './shopping-list-add.component.html',
  styleUrls: ['./shopping-list-add.component.css']
})
export class ShoppingListAddComponent implements OnInit, OnChanges {

@Input() public ingredient:Ingredient = null;
@Output() public clearedEvent:EventEmitter<any>= new EventEmitter<any>();
public isAdd:boolean = true;

 constructor(private shoppingListService:ShoppingListService) { }

  ngOnInit() {
    this.ingredient = new Ingredient(null,null);
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
    console.log(ingredient.name);

    let newIngredient:Ingredient = new Ingredient(ingredient.name,ingredient.amount);

    if(this.isAdd){
      console.log('clear1');
      this.ingredient = newIngredient;
        this.shoppingListService.addIngredient(this.ingredient);
        this.onClear();
    }
    else{
      console.log('clear2');
      this.shoppingListService.editIngredient(this.ingredient,newIngredient);
      //this.ingredient = newIngredient;
    }
  }

  
  public onClear():void{
    console.log('clear');
    //this.ingredient = new Ingredient(null,null);
    this.isAdd = true;
    this.clearedEvent.emit(null);
  }

  public onDelete():void{
    this.shoppingListService.deleteIngredient(this.ingredient);
    this.onClear();
  }

}
