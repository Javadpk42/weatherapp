import { Request, Response } from 'express';
import { fetchWeatherData} from '../services/weatherService';
import { Weather } from '../models/weather';

export const getWeather = async (req: Request, res: Response) => {
  const { location } = req.params;
  
  try {
    const data = await fetchWeatherData(location);
    const {
      coord,
      weather,
      main,
      visibility,
      wind,
      clouds,
      sys,
      timezone,
      id,
      name,
      cod
    } = data;

    const weatherData = new Weather({
      location: name,
      temperature: main.temp,
      description: weather[0].description,
      icon: weather[0].icon,
      coordinates: {
        lon: coord.lon,
        lat: coord.lat
      },
      feels_like: main.feels_like,
      temp_min: main.temp_min,
      temp_max: main.temp_max,
      pressure: main.pressure,
      humidity: main.humidity,
      visibility: visibility,
      wind: {
        speed: wind.speed,
        deg: wind.deg,
        gust: wind.gust
      },
      clouds: { all: clouds.all },
      sunrise: sys.sunrise,
      sunset: sys.sunset,
      timezone: timezone,
      cityId: id,
      name: name,
      cod: cod
    });

    await weatherData.save(); 

    res.json(weatherData);
  } catch (error) {
  }
};


