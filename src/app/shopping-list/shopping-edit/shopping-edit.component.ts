import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;

  // inject service
  constructor(private shopListService: ShoppingListService) { }

  ngOnInit() {
    // Subscribe to Subject in shopping list service
    // when an ingredient is selected
    this.subscription = this.shopListService.startedEditing.
      subscribe(
        (index: number) => {
          this.editedItemIndex = index;
          this.editMode = true;
        } 
      );
  }

  onAddItem(form: NgForm) {
    const value = form.value;
    const newIngredient =  new Ingredient(value.name, value.quantity);
    this.shopListService.addIngredient(newIngredient);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
