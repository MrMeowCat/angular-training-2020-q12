import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { UiInputComponent } from 'src/app/shared/ui-input/ui-input.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  inputValue: string = '';

  @ViewChild('textPlaceholder')
  textPlaceholderRef: ElementRef<HTMLElement>;
  @ViewChild(UiInputComponent)
  uiInputComponent: UiInputComponent;
  @ViewChildren('arrayItem')
  arrayItemRefs: QueryList<ElementRef<HTMLElement>>;

  changeValue(value: string): void {
    console.log(this.textPlaceholderRef);
    console.log(this.uiInputComponent);
    console.log(this.arrayItemRefs);
    this.inputValue = value;
  }
}
