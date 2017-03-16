import { Subscription } from 'rxjs/Rx';
import { Recipe } from '../../models/recipe';
import { ActivatedRoute } from '@angular/router';
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



  constructor(private recipeService:RecipeService, private activatedRoute:ActivatedRoute) { }

  ngOnInit() {

    this.subscription=  this.activatedRoute.params.subscribe(
      (params:any) =>{
          this.recipeIndex = params['id'];
          this.recipe = this.recipeService.getRecipe(this.recipeIndex);
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

}
