import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { DogResponse } from 'src/app/models/dog-response.model';

import { DogService } from './dog.service';

describe('DogService', () => {
  let service: DogService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(DogService);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch dog image', () => {
    const mockImageResponse: DogResponse = {
      message: 'http://example',
      status: ''
    };
    service.fetchDogImage().subscribe((imageResponse) => {
      expect(imageResponse).toEqual(mockImageResponse);
    });
    const request = httpTestingController.expectOne('https://dog.ceo/api/breeds/image/random');
    expect(request.request.method).toEqual('GET');
    request.flush(mockImageResponse);
  });
});
