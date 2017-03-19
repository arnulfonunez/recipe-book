import { Router } from '@angular/router';
//import {  Subscription } from 'rxjs/Rx';
import { RecipeService } from '../services/recipe.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';

@Component({
  selector: 'an-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  //private subscription:Subscription = null;

  constructor(private recipeService:RecipeService,
  private router:Router,
  private authService:AuthenticationService) { }

  ngOnInit() {

  }

  public onStore():void{
    this.recipeService.storeRecipes();
  }

 public onRetrieve():void{
   this.recipeService.onRetrieve();
 }

public onLogout():void{
  //do something to logout the user.
  this.authService.logout();
 
}


public isAuthenticated():boolean{
  return this.authService.isUserAuthenticated();
}


}
