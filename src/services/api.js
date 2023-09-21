import axios from 'axios';
import { Notify } from 'notiflix';

const BASE_URL = 'https://6504a775c8869921ae254d5c.mockapi.io';

axios.defaults.baseURL = BASE_URL;

export const fetchCars = async () => {
  try {
    const response = await axios.get(`/cars`);
    return response.data;
  } catch (error) {
    Notify.failure(error.message);
  }
};
