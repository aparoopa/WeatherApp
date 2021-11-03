import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { IWeather } from './weather';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  weatherDetails: IWeather[];
  constructor(private service: WeatherService) {}

  ngOnInit() {
    this.weatherDetails = [];
    this.service.cities.forEach((city) => {
      this.service.getWeatherDetails(city).subscribe((resp: IWeather) => {
        this.weatherDetails.push(resp);
        if (this.weatherDetails.length === 5) {
          console.log(this.weatherDetails);
        }
      });
    });
  }
}
