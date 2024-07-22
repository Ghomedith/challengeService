import { Cocktail } from './../models/cocktail.model';
import { CocktailService } from './../cocktail.service';
import { Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cocktail-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cocktail-list.component.html',
  styleUrl: './cocktail-list.component.css'
})
export class CocktailListComponent {
  
//Liste de cocktails à afficher :
  cocktails: Cocktail[] = [];

//injection dus service ds le composant:
  //1.constructor(private  service : CocktailService){}
  service = inject(CocktailService);


// recupère la liste des cocktails
 //1. add(){this.cocktails = this.service.getCocktailS();}
  /*getAll(){
    this.cocktails = this.service.getCocktailS();
  }*/

  ngOnInit(): void {
    this.cocktails = this.service.getCocktails();
  }
}
