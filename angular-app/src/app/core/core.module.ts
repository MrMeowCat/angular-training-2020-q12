import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CoreRoutingModule } from 'src/app/core/core-routing.module';
import { reducerMap } from 'src/app/core/state';
import { ChangeDetectionModule } from 'src/app/features/change-detection/change-detection.module';
import { LoginModule } from 'src/app/features/login/login.module';
import { RxjsDemoModule } from 'src/app/features/rxjs-demo/rxjs-demo.module';
import { UserEffects } from 'src/app/features/user-list/state/user.effects';
import { UserListModule } from 'src/app/features/user-list/user-list.module';
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
    UserListModule,
    HttpClientModule,
    CoreRoutingModule,
    StoreModule.forRoot(reducerMap),
    EffectsModule.forRoot([UserEffects])
  ],
  exports: [
    NavbarComponent
  ]
})
export class CoreModule { }
