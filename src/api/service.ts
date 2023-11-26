import axios, { AxiosError, AxiosRequestConfig } from "axios";

const baseURL = "http://127.0.0.1:8000"; // should go in ENV
const fetcher = axios.create({ baseURL });

fetcher.interceptors.request.use(
  async (request: AxiosRequestConfig): Promise<any> => {
    try {
      return request;
    } catch (error) {}
  }
);

fetcher.interceptors.response.use(
  (response) => {
    return Promise.resolve(response.data);
  },
  async (error: AxiosError) => {
    return Promise.reject(error);
  }
);

export default fetcher;
