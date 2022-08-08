import { Component, OnInit } from '@angular/core';
import { RecipesService } from './../recipes.service';
import { Foods } from './../foods';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  recipes:Foods[]=[];

  constructor(private _RecipesService:RecipesService) { }

  getAllRecipes ()
  {
    this._RecipesService.getRecipes().subscribe((response)=> {
      this.recipes = response.recipes;
    })
  }

  ngOnInit(): void {
    this.getAllRecipes();
  }

}
