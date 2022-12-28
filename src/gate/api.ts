import axios, { AxiosError, AxiosRequestConfig, Method } from "axios";

import { isEmpty } from "../helpers/function";

const client = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

client.defaults.timeout = 40000;
client.interceptors.response.use(
  (config) => config,
  (error: AxiosError) => {
    const expectedError =
      error.response &&
      error.response.status >= 400 &&
      error.response.status < 500;

    if (!expectedError) {
      console.error(error);
    }
    if (error.response?.status === 401) {
      //TODO: add logout logic
    }
    return Promise.reject(error);
  }
);

const call = async <T, D>(
  method: Method,
  url: string,
  data?: D
): Promise<T> => {
  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };

  const request: AxiosRequestConfig = { headers, method, url };

  if (!isEmpty(data)) {
    if (method === "get") {
      request.params = data;
    } else {
      request.data = data;
    }
  }

  try {
    const response = await client(request);
    return Promise.resolve(response.data);
  } catch (error: any) {
    let err = null;
    if (error.response) {
      err = error.response;
    } else if (error.request) {
      err = { message: error.request._response };
    } else {
      err = error;
    }
    return Promise.reject(err);
  }
};

const get = <T, D = any>(url: string, data?: D) => call<T, D>("get", url, data);

const post = <T, D = any>(url: string, data?: D) =>
  call<T, D>("post", url, data);

const put = <T, D = any>(url: string, data?: D) => call<T, D>("put", url, data);

const patch = <T, D = any>(url: string, data?: D) =>
  call<T, D>("patch", url, data);

const deleteGate = <T, D = any>(url: string, data?: D) =>
  call<T, D>("delete", url, data);

  

export { get, post, put, patch, deleteGate };
