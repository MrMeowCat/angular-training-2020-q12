import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { RxjsDemoComponent } from './rxjs-demo.component';



@NgModule({
  declarations: [RxjsDemoComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    RxjsDemoComponent
  ]
})
export class RxjsDemoModule { }
