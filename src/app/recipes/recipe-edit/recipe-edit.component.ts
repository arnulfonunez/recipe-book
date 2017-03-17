import { NgForm } from '@angular/forms/src/directives';
import { Ingredient } from '../../models/ingredient';
import { NumberWrapper } from '@angular/forms/src/facade/lang';
import { Subscription } from 'rxjs/Rx';
import { Recipe } from '../../models/recipe';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from '../../services/recipe.service';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'an-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit, OnDestroy {

  protected recipe:Recipe = null;
  protected recipeIndex:number = null;
  protected subscription:Subscription;
  protected isNew:boolean = true;

  constructor(private recipeService:RecipeService, 
  private activatedRoute:ActivatedRoute,
  private router:Router) { 
    console.log('RecipeEditComponent constructor called');
  }

  ngOnInit() {
    
    this.subscription=  this.activatedRoute.params.subscribe(
      (params:any) =>{
          if(params.hasOwnProperty('id')){
                this.recipeIndex = +params['id']; //The plus sign will convert the id string into a Number.
                this.recipe = this.recipeService.getRecipe(this.recipeIndex);
                this.isNew = false
          }
          else{
            this.isNew = true;
          }
      }
      ,
      (error) =>{
        console.log('Unable to get recipe::' + error);
      }
    );
  }

ngOnDestroy(){
  this.subscription.unsubscribe();
}

public onCancel(): void{
  if(confirm('Cancel and disregard changes?')){
    if(this.isNew){
      this.navigateToRecipe();
    }
    else{
      this.navigateToRecipe(this.recipeIndex);
    }
  }
}

private navigateToRecipe(index:number = -1):void{
      if(index < 0){
            this.router.navigate(['/recipes']);
      }
      else{
          this.router.navigate(['/recipes',index]);
      }
}

public onSubmit(value:NgForm):void{
  let newRecipe:Recipe = new Recipe(this.recipe.name,this.recipe.description,this.recipe.imagePath,this.recipe.ingredients);
  if(this.isNew){
    this.recipe = newRecipe;
    this.recipeService.addRecipe(newRecipe);
  }
  else{
    this.recipeService.editRecipe(this.recipe,newRecipe);
  }

  this.navigateToRecipe();
}

public onDeleteIngredient(index:number):void{
  this.recipe.ingredients.splice(index,1);
}

public onAddIngredient(name:string, amount:number):void{
  let ingredient:Ingredient = new Ingredient(name,amount);
  this.recipe.ingredients.push(ingredient);
}

}