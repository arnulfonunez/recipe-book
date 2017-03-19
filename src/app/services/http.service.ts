import { Recipe } from '../models/recipe';
import { Observable } from 'rxjs/Rx';
import { Utils } from './Utils';
import { Headers, Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import {AuthenticationService} from './authentication.service';

@Injectable()
export class HttpService {

  public static readonly baseUrl:string = Utils.firebaseDatabaseURL;

  constructor(private http:Http,
  private authService:AuthenticationService) { }

 public getRecipeData():Observable<any>{
   let url:string = HttpService.baseUrl + "/" + Utils.firebaseRecipeListJson;

   return this.http.get(url).map((response:Response) =>{
              return response.json();
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

   this.httpService.storeRecipes(this.recipeList,"").subscribe(
      (data) => {
        console.log('Data stored successfully');
      },
      (error) =>
      {
        console.log(error);
      }
    );

*/

public storeRecipes(recipeList:Recipe[],token:string):Observable<Response>{
  let userId: string = this.authService.getActiveUser().uid; 
 let url:string = HttpService.baseUrl + "/" + userId + "/" + Utils.firebaseRecipeListJson + "?auth=" + token;
  const body:string = JSON.stringify(recipeList);
  const headers:Headers = new Headers({
    'content-type':'application/json'
  });
 return this.http.put(url,body,{headers:headers});
}

public onRetrieve(token:string):Observable<Recipe[]>{
  let userId: string = this.authService.getActiveUser().uid; 
  let url:string = HttpService.baseUrl + "/" + userId + "/" + Utils.firebaseRecipeListJson + '?auth=' + token;
  return this.http.get(url).map( (response:Response) => {
    console.log('anunez2');
    return response.json();
  });
}
}


/*
public storeRecipes(token:string):Observable<Response>{ 
45     let userId: string = this.authService.getActiveUser().uid; 
46     let url:string = this.baseUrl + '/' + userId + '/' + Utils.firebaseRecipeListJson + '?auth=' + token; 
47     return this.http.put(url,this.recipeList).map((response:Response) => {return response.json();}) 
48 } 
49 
 
50 public retrieveRecipes(token:string):Observable<any>{ //using Observable of any because that's the return type of do method. 
51     let userId:string = this.authService.getActiveUser().uid; 
52     let url: string = this.baseUrl + '/' + userId + '/' + Utils.firebaseRecipeListJson + '?auth=' + token; 
53     return this.http.get(url).map((response:Response) => { 
54            let tempRecipes: Recipe[] = response.json ? response.json() : []; 
55 
 
56            for(let recipe of tempRecipes){ 
57                if(!recipe.hasOwnProperty('ingredients')){ 
58                    recipe.ingredients = []; 
59                } 
60            } 
61         return tempRecipes; 
62     }).do( 
63         (data) => { 
64             this.recipeList = data; 
65         } 
66     ); 
67 } 

*/


/*
export class AuthService{ 
6     public signup(user:User):firebase.Promise<any> { 
7         return firebase.auth().createUserWithEmailAndPassword(user.email,user.password); 
8     } 
9 
 
10     public login(user:User):firebase.Promise<any>{ 
11         return firebase.auth().signInWithEmailAndPassword(user.email,user.password); 
12     } 
13 
 
14     public logout():firebase.Promise<any>{ 
15         return firebase.auth().signOut(); 
16     } 
17 
 
18     public getActiveUser(){ 
19         return firebase.auth().currentUser 
20     } 
21 
 
22 } 
23 

*/