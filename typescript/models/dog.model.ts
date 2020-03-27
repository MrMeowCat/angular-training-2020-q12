import { Animals } from '../enums/animals.enum';
import { Animal } from './animal.model';

export class Dog extends Animal {

  protected height: number;
  private color: string;

  get isOld(): boolean {
    return this.age > 10;
  }

  constructor(public readonly age: number, public breed: string) {
    super();
    this.type = Animals.DOG;
  }

  bark(): void {
    console.log(this, 'bark');
  }
}
