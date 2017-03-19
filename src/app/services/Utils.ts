import { Injectable } from '@angular/core';

@Injectable()
export class Utils{

public static readonly firebaseApiKey:string = "AIzaSyB3hPWDosD3Dp_FMJg0lj5N3HB03x-N3g0"; 
public static readonly firebaseAuthDomain:string = "angular2-recipe-964d3.firebaseapp.com"; 
public static readonly firebaseDatabaseURL:string = "https://angular2-recipe-964d3.firebaseio.com"; 
public static readonly firebaseStorageBucket:string = "angular2-recipe-964d3.appspot.com"; 
public static readonly firebaseMessagingSenderId:string = "72176672091"; 
public static readonly firebaseShoppingListJson:string = "shoppinglist.json"; 
public static readonly firebaseRecipeListJson:string = "recipeList.json"; 

    
public static isEmpty(str:String): boolean{ 
         return (!str || str.trim().length === 0); 
    } 


/*
public createToast(message:string, duration: number = 1500,position: string = 'botton' ): Toast{ 
   let toast: Toast =  this.toastController.create({ 
     message: message, 
     duration: duration, 
     position: position 
   }); 
   return toast; 
 } 
 
 
 public createLoading(content:string = 'Please wait...'): Loading{ 
   return this.loadingController.create({content:content}); 
 } 
 
 
 public setAlternativeBackgroundToggle(toggle:boolean):void{ 
   this.alternativeBackgroundToggle = toggle; 
 } 
 
 
 public getAlternativeBackgroundToggle():boolean{ 
   return this.alternativeBackgroundToggle; 
   } 

*/

}

 