import { Component } from '@angular/core';
import { DogResponse } from 'src/app/models/dog-response.model';
import { DogService } from 'src/app/services/dog.service';

@Component({
  selector: 'app-dog-loader',
  templateUrl: './dog-loader.component.html',
  styleUrls: ['./dog-loader.component.scss']
})
export class DogLoaderComponent {

  dogImageUrl: string = '';

  constructor(private dogService: DogService) { }


  loadDogImage(): void {
    this.dogService.fetchDogImage().subscribe((response: DogResponse) => {
      this.dogImageUrl = response.message;
    });
  }
}
