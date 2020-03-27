import { Animals } from './enums/animals.enum';
import { Animal } from './models/animal.model';
import { Cat } from './models/cat.model';
import { DogResponse } from './models/dog-response.model';
import { Dog } from './models/dog.model';
import { DogService } from './services/dog.service';

const dogService: DogService = new DogService();
dogService.fetchDogImage().then((response: DogResponse) => {
  const imageElement: HTMLImageElement = document.querySelector('img');
  imageElement.src = response.message;
});


// types
const dogResponse: DogResponse = {message: 'message', status: 'ok'};
const dogResponse2: {message: string, status: string} = {message: 'message', status: 'ok'};
const optionalObj: {prop1?: string, prop2: string} = {prop2: 'ok'};
const readonlyObj: {readonly prop1: string, prop2: string} = {prop1: 'str', prop2: 'ok'};
// readonlyObj.prop1 = 'asd'; ERROR
type MyType = {prop1: string, prop2: string};
const castObj: {prop1: string, prop2: string} = {prop1: 'str'} as MyType;

const array: string[] = ['str', '38'];
const tupleArray: [string, number] = ['str', 2];
const literalTypes: 'str' = 'str';
const intersectionTypes: {prop1: string} & {prop2: string} = {prop1: 'str', prop2: 'str'};
const unionTypes: {prop1: string} | {prop2: string} = {prop1: 'str'};

const partialType: Partial<{prop1: string, prop2: string}> = {};
const readonlyType: Readonly<{prop1: string, prop2: string}> = {prop1: 'str', prop2: 'str'};
// readonlyType.prop1 = '123'; ERROR

// functions
function typedFunction(parameter: string): void {
  console.log(parameter);
  return;
}
typedFunction('value');

function functionWithDefaultParameter(parameter: string = 'default'): void {
  console.log(parameter);
}
functionWithDefaultParameter();

function functionWithOptionalParameter(parameter?: string): void {
  console.log(parameter);
}
functionWithOptionalParameter();

function functionWithVarargs(...parameters: string[]): void {
  console.log(parameters);
}
functionWithVarargs('str', 'str2', 'str3');

function genericFunction<T>(argument: T): T {
  return argument;
}

const value: number = genericFunction(5);

const dog: Dog = new Dog(8, 'taksa');
const cat: Cat = new Cat();

console.log(`dog is animal = ${dog instanceof Animal}`);
console.log(`cat is animal = ${cat instanceof Animal}`);
console.log(`dog is dog = ${dog instanceof Dog}`);
console.log(`cat is dog = ${cat instanceof Dog}`);

console.log(Animals);
