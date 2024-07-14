import axios from "axios";

const defaultOptions = {
  baseURL: import.meta.env.VITE_ADMIN_API,
};

const axiosInstance = axios.create(defaultOptions);

export { axiosInstance };
