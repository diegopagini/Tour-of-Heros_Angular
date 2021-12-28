import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/services/heroes.service';
import { MessageService } from 'src/app/services/message.service';
import { Hero } from '../models/hero.interface';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  hero: Hero = {
    id: 1,
    name: 'Windstorm',
  };

  heroes: Hero[] = [];
  selectedHero?: Hero;

  constructor(
    private heroesService: HeroesService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.heroes = this.heroesService.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.sendMessage(`Hi 🖐, my name is: ${hero.name}`);
  }
}
