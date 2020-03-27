import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { CurrencyCodes } from 'src/app/enums/currency-codes.enum';
import { UiInputComponent } from 'src/app/shared/components/ui-input/ui-input.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  inputValue: string = '';
  currencyCodes: typeof CurrencyCodes = CurrencyCodes;

  @ViewChild('textPlaceholder')
  textPlaceholderRef: ElementRef<HTMLElement>;
  @ViewChild(UiInputComponent)
  uiInputComponent: UiInputComponent;
  @ViewChildren('arrayItem')
  arrayItemRefs: QueryList<ElementRef<HTMLElement>>;

  changeValue(value: string): void {
    this.inputValue = value;
  }
}
