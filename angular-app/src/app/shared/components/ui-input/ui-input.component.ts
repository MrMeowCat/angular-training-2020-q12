import { Component, EventEmitter, HostBinding, HostListener, Input, Output } from '@angular/core';

@Component({
  selector: 'app-ui-input',
  templateUrl: './ui-input.component.html',
  styleUrls: ['./ui-input.component.scss']
})
export class UiInputComponent {

  @Input()
  value: string = '';
  @Input()
  onlyNumbers: boolean;
  @Output()
  valueChange: EventEmitter<string> = new EventEmitter();

  @HostBinding('class.empty')
  get isEmpty(): boolean {
    return !this.value;
  }

  changeValue(event: any): void {
    this.valueChange.emit(event.target.value);
  }

  @HostListener('keyup', ['$event'])
  listenKeyUp(event: any): void {
  }
}
