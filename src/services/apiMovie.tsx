import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  
    success: string;
    message: string;
    data: T;
  
}

const axiosInstance = axios.create({
  baseURL: "https://api.tamashakhoneh.ir/v4/",
});

class APIMovie<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
  };

  get = (id: number | string) => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint + "/" + id)
      .then((res) => res.data.data);
  };
}

export default APIMovie;
