import { Injectable } from '@angular/core';
import { Cocktail } from './models/cocktail.model';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  cocktails:Cocktail[] = [
    { nom: 'Mojito', prix: 8, image: 'url_to_mojito_image' },
    { nom: 'Daiquiri', prix: 7, image: 'url_to_daiquiri_image' },
    { nom: 'Pina Colada', prix: 9, image: 'url_to_pina_colada_image' }
  ];

  constructor() {}


  getCocktails():Cocktail[] {
    return this.cocktails;
  }
}
