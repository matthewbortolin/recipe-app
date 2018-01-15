import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'A test recipe', 'https://www.google.com.au/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&ved=0ahUKEwi999Puq9nYAhXH54MKHVtxB1AQjRwIBw&url=https%3A%2F%2Fpixabay.com%2Fen%2Frecipe-label-icon-symbol-spoon-575434%2F&psig=AOvVaw1d6lgzvpffPx3wl-07jGb_&ust=1516084189671358'),
    new Recipe('Test Recipe2', 'A test recipe', 'https://www.google.com.au/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&ved=0ahUKEwi999Puq9nYAhXH54MKHVtxB1AQjRwIBw&url=https%3A%2F%2Fpixabay.com%2Fen%2Frecipe-label-icon-symbol-spoon-575434%2F&psig=AOvVaw1d6lgzvpffPx3wl-07jGb_&ust=1516084189671358') 
  ];

  constructor() { }

  ngOnInit() {
  }

}
