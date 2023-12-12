
import axios from 'axios';

const API_KEY = "23506365-cc0261603315c6420db2e71e3";
const BASE_URL = 'https://pixabay.com/api';


export async function fetchPhoto(q, page, perPage) {
  const url = `${BASE_URL}/?key=${API_KEY}&q=${q}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`;
  const response = await axios.get(url);
  return response.data;
}

// const queryParams = new URLSearchParams({
//        key: API_KEY,
//        q: search,
//        image_type: photo,
//        orientation: horizontal,
//        safesearch: true,
//        page: page,
//        per_page: per_page,
//    });
