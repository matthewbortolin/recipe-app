import { Subject } from 'rxjs/Subject';
import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {

  // Event to update ingredients list when a new ingredient is added
  ingredientsChanged = new Subject<Ingredient[]>();
  index: number;
  startedEditing = new Subject<number>();

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
    if(this.ingredientExists(ingredient)) {
        this.ingredients[this.index].quantity += ingredient.quantity;
    }
    else {
      this.ingredients.push(ingredient);
    }
    // Create an event to update the array of ingredients
    this.ingredientsChanged.next(this.ingredients.slice());
  }
 
  // Returns true and assigns index variable
  // if ingredient already exist in ingredients[]
  ingredientExists(ingredient: Ingredient) {
    for(let i in this.ingredients) {
      if(ingredient.name === this.ingredients[i].name) {
        this.index = +i;
        return true;
      }
    }
    return false;
  }

  //Add muliple ingredients
  addIngredients(ingredients: Ingredient[]) {
    // Spread operator ... to make array list
    //this.ingredients.push(...ingredients);
    //this.ingredientsChanged.next(this.ingredients.slice());

    for(let key in ingredients) {
      if(this.ingredientExists(ingredients[key])) {
          this.ingredients[this.index].quantity += ingredients[key].quantity;
      }
      else {
        this.ingredients.push(ingredients[key]);
      }
    }
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
