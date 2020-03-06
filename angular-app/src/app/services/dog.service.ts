import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DogResponse } from 'src/app/models/dog-response.model';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class DogService extends HttpService {

  private static readonly DOG_URL: string = 'https://dog.ceo/api/breeds/image/random';

  fetchDogImage(): Observable<DogResponse> {
    return this.get(DogService.DOG_URL);
  }
}
