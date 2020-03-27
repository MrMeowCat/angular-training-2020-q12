import { Animals } from '../enums/animals.enum';

export abstract class Animal {
  protected type: Animals;
  readonly age: number;
}
