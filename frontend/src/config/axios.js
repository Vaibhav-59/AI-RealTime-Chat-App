import axios from "axios";

const axiosInstance = axios.create({
  baseURL: 'https://chat-app-backend-paex.onrender.com',
  headers: {
    "Authorization":`Bearer ${localStorage.getItem('token')}`
  }
})

export default axiosInstance;
