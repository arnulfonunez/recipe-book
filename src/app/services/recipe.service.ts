import { AuthenticationService } from './authentication.service';
import { Response } from '@angular/http';
import { Observable, Subscription } from 'rxjs/Rx';
import { HttpService } from './http.service';
import { Recipe } from '../models/recipe';
import {Ingredient} from '../models/ingredient';
import { Injectable,EventEmitter } from '@angular/core';

@Injectable()
export class RecipeService {

private subscription:Subscription;
private recipeList:Recipe[] = [];
public recipeSelected:EventEmitter<Recipe> = new EventEmitter<Recipe>(); //no longer used
public recipesRefreshed:EventEmitter<Recipe[]> = new EventEmitter<Recipe[]>(); //this will be triggered when the data is refreshed from database

  constructor(private httpService:HttpService,private authService:AuthenticationService) { 

    //Start
    /*
    let limit:number = 50;
    let ingredientLimit:number = 10;
    for(let i =0; i < limit;i++){
      let tempIng:Ingredient[] = [];
      for(let j=0; j < ingredientLimit; j++){
        tempIng.push(new Ingredient('' + i + '_' + j, j));
      }
    this.recipeList.push(new Recipe('Recipe:' + i, 'Description:' + i,'',tempIng));
  }
  */
    //End
  }

  public getRecipeList():Recipe[]{
  return this.recipeList;
}

//No longer used
public pushSelectedRecipe(recipe:Recipe):void{
  this.recipeSelected.emit(recipe);
}

public emitRecipesRefreshed():void{
  this.recipesRefreshed.emit(this.recipeList);
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

public editRecipe(oldRecipe:Recipe, newRecipe:Recipe): void{
  let index:number = this.recipeList.indexOf(oldRecipe);
  this.recipeList[index] = newRecipe;
}

public storeRecipes():void{
    this.authService.getActiveUser().getToken()
    .then((token:string) => {
        this.httpService.storeRecipes(this.recipeList,token).subscribe(
              (data) => {console.log('Data stored successfully');}
              ,(error) =>{console.log(error);}
            );
    })
    .catch( (error) => {
      console.log('Error storing data on server');
      console.log(error);
    });
}

/*
this.authService.getActiveUser().getToken()
                  .then(
                    (token:string) =>{
                      if(action === 'load'){
                        this.retrieveRecipes(token);
                      }
                      else if(action === 'store'){
                        this.storeRecipes(token);
                      }
                      else{
                        this.spinner.dismiss();
                      }
                    }
                  ).catch(
                    error =>{
                      this.spinner.dismiss();
                      this.utils.createToast(error.message).present();
                    }
                  )

*/
public onRetrieve():void{
this.authService.getActiveUser().getToken()
.then((token:string) =>{
            this.httpService.onRetrieve(token).subscribe(
                (data: Recipe[]) =>{
                    this.recipeList = data;
                    this.emitRecipesRefreshed(); //Notify components that the data has been refreshed.
                },
                (error) =>
                {
                  console.log(error);
                }
              );
})
.catch((error) => {
    console.log('Error retrieving data from server');
    console.log(error);
});
   
}
}