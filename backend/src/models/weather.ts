import { Schema, model } from 'mongoose';

const weatherSchema = new Schema({
  location: { type: String, required: true },
  temperature: { type: Number, required: true },
  description: { type: String, required: true },
  icon: { type: String, required: true },
  date: { type: Date, default: Date.now },
  coordinates: {
    lon: { type: Number, required: true },
    lat: { type: Number, required: true }
  },
  feels_like: { type: Number, required: true },
  temp_min: { type: Number, required: true },
  temp_max: { type: Number, required: true },
  pressure: { type: Number, required: true },
  humidity: { type: Number, required: true },
  visibility: { type: Number, required: true },
  wind: {
    speed: { type: Number, required: true },
    deg: { type: Number, required: true },
    gust: { type: Number, required: true }
  },
  clouds: { all: { type: Number, required: true } },
  sunrise: { type: Number, required: true },
  sunset: { type: Number, required: true },
  timezone: { type: Number, required: true },
  cityId: { type: Number, required: true },
  name: { type: String, required: true },
  cod: { type: Number, required: true }
});

export const Weather = model('Weather', weatherSchema);
