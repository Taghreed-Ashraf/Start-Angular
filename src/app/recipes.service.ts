import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable, observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  constructor(private _httpClinet:HttpClient) { }

  getRecipes ():Observable<any>
  {
    return this._httpClinet.get(`https://forkify-api.herokuapp.com/api/search?q=pizza`)
  }
}
