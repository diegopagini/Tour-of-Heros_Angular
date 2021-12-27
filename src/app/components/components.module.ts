import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesComponent } from './heroes/heroes.component';
import { FormsModule } from '@angular/forms';
import { HeroDetailsComponent } from './hero-details/hero-details.component';
import { MessageComponent } from './message/message.component';

@NgModule({
  declarations: [HeroesComponent, HeroDetailsComponent, MessageComponent],
  imports: [CommonModule, FormsModule],
  exports: [HeroesComponent],
})
export class ComponentsModule {}
