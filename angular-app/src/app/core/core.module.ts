import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from 'src/app/features/home/home.module';
import { HttpService } from 'src/app/services/http.service';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    HomeModule,
    HttpClientModule
  ],
  exports: [
    HomeModule
  ]
})
export class CoreModule { }
