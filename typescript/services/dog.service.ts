import { DogResponse } from '../models/dog-response.model';
import { HttpService } from './http.service';

export class DogService extends HttpService {

  fetchDogImage(): Promise<DogResponse> {
    return this.get('https://dog.ceo/api/breeds/image/random');
  }
}
