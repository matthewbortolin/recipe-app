import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;

  constructor(private shopListService: ShoppingListService,
    private recipeService: RecipeService,
    private route: ActivatedRoute, 
    private router: Router) { 
  }

  ngOnInit() {
    // const id =this.route.snapshot.params['id'];
 
    // reacts to changes, + sign castes to number
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id']; 
        this.recipe = this.recipeService.getRecipe(this.id);
      }    
    )
  }

  onAddToShoppingList() {
    this.shopListService.addIngredients(this.recipe.ingredients);
  }

  onEditRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.route});
    //this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
  
  }

}
