import { CurrencyNamePipe } from './currency-name.pipe';

describe('CurrencyNamePipe', () => {
  it('create an instance', () => {
    const pipe = new CurrencyNamePipe();
    expect(pipe).toBeTruthy();
  });
});
