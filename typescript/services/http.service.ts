import axios, { AxiosResponse } from 'axios';

export abstract class HttpService {

  get<R = any>(url: string): Promise<R> {
    return axios.get(url).then((response: AxiosResponse<R>) => response.data);
  }
}

