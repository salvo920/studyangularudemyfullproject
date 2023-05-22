import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { AppHighLightsDirective } from './directive/appHighlights/app-high-lights.directive';
import { BetterHighLightsDirective } from './directive/betterHighlights/better-high-lights.directive';
import { UnlessDirective } from './directive/unless/unless.directive';

@NgModule({
  declarations: [
    AppComponent,
    AppHighLightsDirective,
    BetterHighLightsDirective,
    UnlessDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
