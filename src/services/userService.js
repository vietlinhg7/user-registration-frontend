import axios from 'axios';

const API_URL = 'https://user-registration-4us1.onrender.com/user';

export const registerUser = (data) => {
  return axios.post(`${API_URL}/register`, data);
};
