import { Recipe } from '../models/recipe';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'an-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

 public selectedRecipe:Recipe = null;
  constructor() { }

  ngOnInit() {
  }



}
