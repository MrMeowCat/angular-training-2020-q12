import { Component, EventEmitter, forwardRef, HostBinding, HostListener, Input, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-ui-input',
  templateUrl: './ui-input.component.html',
  styleUrls: ['./ui-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => UiInputComponent),
      multi: true
    }
  ]
})
export class UiInputComponent implements ControlValueAccessor {

  @Input()
  value: string = '';
  @Input()
  disabled: boolean;
  @Input()
  onlyNumbers: boolean;
  @Output()
  valueChange: EventEmitter<string> = new EventEmitter();

  onChange: Function = () => {};
  onTouch: Function = () => {};

  @HostBinding('class.empty')
  get isEmpty(): boolean {
    return !this.value;
  }

  changeValue(event: any): void {
    this.writeValue(event.target.value);
    this.valueChange.emit(event.target.value);
  }

  @HostListener('keyup', ['$event'])
  listenKeyUp(event: any): void {
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  writeValue(value: string): void {
    this.value = value;
    this.onChange(value);
  }
}
