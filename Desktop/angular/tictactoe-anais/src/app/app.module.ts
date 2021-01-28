import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { GamePageComponent } from './game-page/game-page.component';
import { ParamPageComponent } from './param-page/param-page.component';

@NgModule({
  declarations: [
    AppComponent,
    
    GamePageComponent,
    ParamPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
