import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { ChangeDetectionComponent } from './change-detection.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';



@NgModule({
  declarations: [
    ChangeDetectionComponent,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class ChangeDetectionModule { }
