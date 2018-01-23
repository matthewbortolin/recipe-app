import { EventEmitter } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Test Recipe', 
      'A test recipe', 
      'https://c.pxhere.com/images/e8/ff/ab170fd2f2a47e4057318fdbd41b-1418256.jpg!d',
      [
        new Ingredient('Prawns', 5),
        new Ingredient('Rice', 100)
      ]), 
    new Recipe('Test Recipe2', 
      'A test recipe', 
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7IEW8tdiwrWq7kTNfSCNznONYEkYU1GefwdBD8w8CgwTuSpEx',
      [
        new Ingredient('Cherry Tomatoes', 5),
        new Ingredient('Eggplant', 2)
      ]) 
  ];

  getRecipes() {
    // slice() gets a copy of array recipes
    return this.recipes.slice();
  }
}
