import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: 'input[appOnlyNumbers]'
})
export class OnlyNumbersDirective {

  private static readonly AVAILABLE_KEYS: any = {
    'Home': true,
    'End': true,
    'ArrowLeft': true,
    'ArrowRight': true,
    'Backspace': true,
    'Delete': true
  };

  @Input('appOnlyNumbers')
  onlyNumbers: boolean;

  constructor(private elementRef: ElementRef<HTMLInputElement>) {
    console.log('Numbers only directive', elementRef);
  }

  @HostListener('keydown', ['$event'])
  listenKeyDown(event: KeyboardEvent): void {
    if (!this.onlyNumbers) {
      return;
    }
    const key: string = event.key;
    if (key >= '0' && key <= '9' || OnlyNumbersDirective.AVAILABLE_KEYS[key]) {
      return;
    }
    event.preventDefault();
  }
}
