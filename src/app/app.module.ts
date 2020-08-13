import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ElementComponent } from './element/element.component';
import { PeriodicTableComponent } from './periodic-table/periodic-table.component';
import { RomanNumberPipe } from './roman-number.pipe';
import { ElementDetailComponent } from './element-detail/element-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ElementComponent,
    PeriodicTableComponent,
    RomanNumberPipe,
    ElementDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
