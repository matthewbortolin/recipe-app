import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  ingredients: Ingredient[];
  private subscription: Subscription;

  constructor(private shopListService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shopListService.getIngredients();

    // Listens to observable for ingredients changed and updates list
    this.subscription = this.shopListService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients 
    });
  }

  onEditItem(index: number) {
    this.shopListService.startedEditing.next(index);
  
  }
  // Stop memory leaks by stopping subscription on page change
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
