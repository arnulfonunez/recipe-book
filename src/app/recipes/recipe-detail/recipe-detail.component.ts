import { Recipe } from '../../models/recipe';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'an-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

@Input()  public selectedRecipe:Recipe = null;
  constructor() { }

  ngOnInit() {
  }

}