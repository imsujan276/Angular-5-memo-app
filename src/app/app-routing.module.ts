import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';    
import { MemoComponent } from './memo/memo.component'; 
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { WeatherComponent } from './weather/weather.component'; 

const routes: Routes = [
	  {
	    path: '',
	    component: HomeComponent
	  },
	  {
	    path: 'memo/:id', //id from the URL request
	    component: MemoComponent
	  },
	  {
	    path: 'weather', 
	    component: WeatherComponent
	  },
	  {
	    path: '**', 
	    component: PageNotFoundComponent
	  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
