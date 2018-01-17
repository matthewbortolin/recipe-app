import { EventEmitter } from '@angular/core';

import { Recipe } from './recipe.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Test Recipe', 'A test recipe', 
      'https://c.pxhere.com/images/e8/ff/ab170fd2f2a47e4057318fdbd41b-1418256.jpg!d'),
    new Recipe('Test Recipe2', 'A test recipe', 
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7IEW8tdiwrWq7kTNfSCNznONYEkYU1GefwdBD8w8CgwTuSpEx') 
  ];

  getRecipes() {
    // slice() gets a copy of array recipes
    return this.recipes.slice();
  }
}
