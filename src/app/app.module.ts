import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';

import {
  ScreenTrackingService,
  UserTrackingService,
} from '@angular/fire/analytics';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ComponentsModule, AppRoutingModule],
  providers: [ScreenTrackingService, UserTrackingService],
  bootstrap: [AppComponent],
})
export class AppModule {}
