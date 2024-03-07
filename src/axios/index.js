import axios from "axios";

const BASE_URL = "https://motion.propulsion-home.ch/backend/api";

const UserAxios = axios.create({
  baseURL: BASE_URL,
});

// Interceptor for installing an authorization token from localStorage
UserAxios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);


export const getMyUserDatas = async () => {
  try {
    const response = await UserAxios.get('/users/me/');
    return response.data;
  } catch (error) {
    console.error("Error", error);
    throw error;
  }
};


export const fetchPosts = async ({ limit = 10, offset = 0 }) => {
  try {
    const response = await UserAxios.get(`/social/posts/?limit=${limit}&offset=${offset}`);
    return response.data;
  } catch (error) {
    console.error("Error", error);
    throw error;
  }
};

export default UserAxios;