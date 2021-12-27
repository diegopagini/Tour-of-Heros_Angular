import { Component, Input } from '@angular/core';
import { Hero } from '../models/hero.interface';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css'],
})
export class HeroDetailsComponent {
  @Input() hero?: Hero;
}
