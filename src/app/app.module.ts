import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { MemoComponent } from './memo/memo.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { WeatherComponent } from './weather/weather.component';

import { FormsModule } from '@angular/forms';

import { MemoService } from './memo.service';
import { WeatherService } from './weather.service';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MemoComponent,
    PageNotFoundComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [MemoService, WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
