import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CoreRoutingModule } from 'src/app/core/core-routing.module';
import { ChangeDetectionModule } from 'src/app/features/change-detection/change-detection.module';
import { LoginModule } from 'src/app/features/login/login.module';
import { RxjsDemoModule } from 'src/app/features/rxjs-demo/rxjs-demo.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { NavbarComponent } from './components/navbar/navbar.component';


@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    SharedModule,
    LoginModule,
    RxjsDemoModule,
    ChangeDetectionModule,
    HttpClientModule,
    CoreRoutingModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class CoreModule { }
