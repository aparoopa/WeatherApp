import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { IWeather } from './home/weather';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  cities = ['London', 'Paris', 'New York', 'Los Angeles', 'Tokyo']; // London, Paris, New York, Los Angeles, and Tokyo
  apiId = environment.apiKey;
  baseUrl = 'https://api.openweathermap.org/data/2.5/weather?q=';
  constructor(private http: HttpClient) {}

  getWeatherDetails(city: string) {
    const url = this.baseUrl + city + '&appid=' + this.apiId;
    return this.http.get<IWeather>(url);
  }
}
