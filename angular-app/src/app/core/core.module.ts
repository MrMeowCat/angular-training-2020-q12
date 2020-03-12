import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { HomeModule } from 'src/app/features/home/home.module';
import { LoginModule } from 'src/app/features/login/login.module';
import { RxjsDemoModule } from 'src/app/features/rxjs-demo/rxjs-demo.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    HomeModule,
    LoginModule,
    RxjsDemoModule,
    HttpClientModule
  ],
  exports: [
    HomeModule,
    LoginModule,
    RxjsDemoModule
  ]
})
export class CoreModule { }
