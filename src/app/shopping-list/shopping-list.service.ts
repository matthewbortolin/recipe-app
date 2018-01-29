import { Subject } from 'rxjs/Subject';
import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {

  // Event to update ingredients list when a new ingredient is added
  ingredientsChanged = new Subject<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Oranges', 5),
    new Ingredient('Apples', 3)
  ];

  // Return copy of ingredients
  getIngredients() {
    return this.ingredients.slice();
  }

  // Add new ingredient
  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    // Create an event to update the array of ingredients
    this.ingredientsChanged.next(this.ingredients.slice());
  }
 
  //Add muliple ingredients
  addIngredients(ingredients: Ingredient[]) {
    // Spread operator ... to make array list
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
