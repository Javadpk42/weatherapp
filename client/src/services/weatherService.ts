import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000/api';

export const getWeather = async (location: string) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/weather/${location}`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch weather data');
  }
};


