import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RxjsDemoComponent } from './rxjs-demo.component';



@NgModule({
  declarations: [RxjsDemoComponent],
  imports: [
    CommonModule
  ],
  exports: [
    RxjsDemoComponent
  ]
})
export class RxjsDemoModule { }
