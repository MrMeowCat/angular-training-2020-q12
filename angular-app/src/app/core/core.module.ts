import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from 'src/app/features/home/home.module';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    HomeModule
  ]
})
export class CoreModule { }
