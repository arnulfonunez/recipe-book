import { Ingredient } from '../models/ingredient';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'an-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  public ingredientList:Ingredient[] = [];

  constructor() { }

  ngOnInit() {
  }

}
