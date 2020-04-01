import { ElementRef } from '@angular/core';
import { OnlyNumbersDirective } from './only-numbers.directive';

describe('OnlyNumbersDirective', () => {

  let elementRef = {};

  it('should create an instance', () => {
    const directive = new OnlyNumbersDirective(elementRef as ElementRef);
    expect(directive).toBeTruthy();
  });
});
