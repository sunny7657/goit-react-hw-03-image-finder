import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://pixabay.com/api/',
  params: { key: '40411285-e0a8815789142127d1d60a3c2' },
});
