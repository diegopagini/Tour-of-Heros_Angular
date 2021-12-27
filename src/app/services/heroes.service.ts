import { Injectable } from '@angular/core';
import { Hero } from '../components/models/hero.interface';
import { HEROES } from '../mock/heroes.mock';

@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  private heroes = HEROES;

  getHeroes(): Hero[] {
    return this.heroes;
  }
}
