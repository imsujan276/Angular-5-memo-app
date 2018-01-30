import { Component, OnInit } from '@angular/core';

import { WeatherService } from '../weather.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})


export class WeatherComponent implements OnInit {

	chart = [];

  constructor(private _weather : WeatherService) { }

  ngOnInit() {

  		this._weather.dailyForcast()
  				.subscribe(res => {



              console.log(res);
              
  						
  						let temp_max = res['list'].map(res => res.main.temp_max)

  						let temp_min = res['list'].map(res => res.main.temp_min)

  						let allDates = res['list'].map(res => res.dt)

  						let weatherDates = []

  						allDates.forEach((res) => {
  							let jsDate = new Date(res*1000)
  							weatherDates.push(jsDate.toLocaleTimeString('en', {
  								year : "numeric", 
                  month : "short",
  								day: "numeric"
  							}))
  						})
  						console.log('max', temp_max);
  						console.log('min', temp_min);
  						console.log('Dates', weatherDates);

  						this.chart = new Chart ('canvas', {
  							type: 'line',
  							data: {
  								labels : weatherDates,
  								datasets:[
  									{	
  										label: 'Max temp',
  										backgroundColor: '#fff',
  										data: temp_max,
  										borderColor: '#fff',
  										fill: false,
  									},
  									{
  										label : 'Min Temp',
  										backgroundColor: '#000',
  										data: temp_min,
  										borderColor: '#000',
  										fill: false,
  									}
  								]
  							},
  							options:{
  								responsive: true,

  								title: {
  									display: true,
  									text: 'Chart.js Chart'
  								},
  								scales:{
  									xAxes: [{
  										display:true,
  										scaleLabel:{
  											display: true,
  											labelString : 'Dates',
  										}
  									}],
  									yAxes:[{
  										display:true,
  										scaleLabel:{
  											display: true,
  											labelString : 'Temperature',
  										}
  									}]
  								}
  							}
  						})

  				})
  }

}
