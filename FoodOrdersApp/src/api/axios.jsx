import axios from 'axios';

const baseURL = 'https://localhost:7157/api';

function instance() {
  return axios.create({
    baseURL,
    headers: {
      
    },
  });
}

export default instance;