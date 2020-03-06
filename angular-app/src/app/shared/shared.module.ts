import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiInputComponent } from './components/ui-input/ui-input.component';
import { OnlyNumbersDirective } from './directives/only-numbers.directive';
import { CurrencyNamePipe } from './pipes/currency-name.pipe';



@NgModule({
  declarations: [
    UiInputComponent,
    OnlyNumbersDirective,
    CurrencyNamePipe
  ],
  exports: [
    UiInputComponent,
    OnlyNumbersDirective,
    CurrencyNamePipe
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
