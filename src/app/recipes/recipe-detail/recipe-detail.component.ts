import { RecipeService } from '../../services/recipe.service';
import { Subscription } from 'rxjs/Rx';
import { ActivatedRoute, Router } from '@angular/router';
import { ShoppingListService } from '../../services/shopping-list.service';
import { Recipe } from '../../models/recipe';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'an-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit, OnDestroy {
  private subscription:Subscription;
  public selectedRecipe:Recipe = null;
  private recipeIndex:number = null;

  constructor(private shoppingListService:ShoppingListService, 
  private activatedRoute: ActivatedRoute,
  private recipeService:RecipeService, private router:Router) { }

  ngOnInit() {
    this.subscription=  this.activatedRoute.params.subscribe(
      (params:any) =>{
          this.recipeIndex= params['id'];
          this.selectedRecipe = this.recipeService.getRecipe(this.recipeIndex);
      }
      ,
      (error) =>{
          console.log('Unable to get recipeIndex::' + error);
      }
    );
  }

public onAddToShoppingList():void{
  if(this.selectedRecipe)
  this.shoppingListService.addIngredients(this.selectedRecipe.ingredients);
}

ngOnDestroy(){
  this.subscription.unsubscribe();
}

public onDelete(): void{
  if(confirm('Are you sure that you want to delete recipe?')){
      this.recipeService.deleteRecipe(this.selectedRecipe);
      this.router.navigate(['/recipes']);
  }
}

public onEdit(): void{
  this.router.navigate(['/recipes',this.recipeIndex,'edit']);
  //this will navigate to '/recipes/number/edit. This is the path indicate in the routing. :id/edit


}

}
