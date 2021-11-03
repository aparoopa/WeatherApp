import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './main/home/home.component';
import { CardComponent } from './shared/card/card.component';
import { HttpClientModule } from '@angular/common/http';
import { DecimalPipe } from './shared/decimal.pipe';

@NgModule({
  declarations: [AppComponent, HomeComponent, CardComponent, DecimalPipe],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
