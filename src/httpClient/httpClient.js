// httpClient Interface
// fetch(endPoint, options):Promise<Response>

import axios from "axios";

export class HttpClient {
  #instance;
  #baseURL;
  #storage;

  constructor(baseURL, storage) {
    this.#baseURL = baseURL;
    this.#storage = storage;
    this.#instance = this.#createInstance();
  }

  #createInstance() {
    const instance = axios.create({
      baseURL: this.#baseURL,
      timeout: 4000,
    });

    this.#addAuthInterceptor(instance);

    return instance;
  }

  #addAuthInterceptor(instance) {
    instance.interceptors.request.use(
      (config) => {
        const token = this.#storage.get();

        if (token) config.headers.Authorization = `Bearer ${token}`;

        return config;
      },
      (error) => {
        console.error(error);
        return Promise.reject(error);
      }
    );
  }

  async fetch(endPoint, options = {}) {
    return await this.#instance({
      url: endPoint,
      ...options,
    });
  }
}
