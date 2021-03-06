import { Recipe } from '../../models/recipe';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'an-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

@Input() public recipe:Recipe = null;
@Input() public recipeId:number = 0;

  constructor() { }

  ngOnInit() {
  }

}
