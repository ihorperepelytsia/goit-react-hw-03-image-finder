import axios from 'axios';
const BASE_URL = 'https://pixabay.com/api/';
const KEY_ID = '&key=15725312-965e6abfe89225a1afd144b44';

export const fetchImages = (query = '', page = 1) =>
  axios.get(
    `${BASE_URL}?q=${query}&page=${page}${KEY_ID}&image_type=photo&orientation=horizontal&per_page=12`,
  );
