import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { GraphBoardComponent } from './graph-board/graph-board.component';
import {Ogma} from '../assets/lib/ogma.min.js';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    GraphBoardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
