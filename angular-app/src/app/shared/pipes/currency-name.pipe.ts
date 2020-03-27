import { Pipe, PipeTransform } from '@angular/core';
import { CurrencyCodes } from 'src/app/enums/currency-codes.enum';

@Pipe({
  name: 'currencyName'
})
export class CurrencyNamePipe implements PipeTransform {

  transform(value: string): string {
    if (!value) {
      return value;
    }
    switch (value) {
      case CurrencyCodes.USD:
        return 'US Dollar';
      case CurrencyCodes.EUR:
        return 'Euro';
      case CurrencyCodes.BYN:
        return 'Belarusian Ruble';
      default:
        return value;
    }
  }
}
