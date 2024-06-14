import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const API_KEY = process.env.OPENWEATHERMAP_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

export const fetchWeatherData = async (location:any) => {
  try {
    console.log('entered fisrt')
    const response = await axios.get(`${BASE_URL}?q=${location}&appid=${API_KEY}&units=metric`);
    return response.data;
  } catch (error) {
  }
};

