import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'A test recipe', 'https://c.pxhere.com/images/e8/ff/ab170fd2f2a47e4057318fdbd41b-1418256.jpg!d'),
    new Recipe('Test Recipe2', 'A test recipe', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7IEW8tdiwrWq7kTNfSCNznONYEkYU1GefwdBD8w8CgwTuSpEx') 
  ];

  constructor() { }

  ngOnInit() {
  }

}
