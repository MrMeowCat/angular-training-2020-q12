import { Animals } from '../enums/animals.enum';
import { Animal } from './animal.model';

export class Cat extends Animal {

  protected type: Animals = Animals.CAT;
}
