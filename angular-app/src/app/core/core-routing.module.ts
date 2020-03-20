import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/core/guards/auth.guard';
import { ChangeDetectionComponent } from 'src/app/features/change-detection/change-detection.component';
import { LoginComponent } from 'src/app/features/login/login.component';
import { RxjsDemoComponent } from 'src/app/features/rxjs-demo/rxjs-demo.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home'
  },
  {
    path: 'login',
    pathMatch: 'full',
    component: LoginComponent
  },
  {
    path: 'home',
    pathMatch: 'full',
    loadChildren: () => import('../features/home/home.module').then((m) => m.HomeModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'rxjs',
    pathMatch: 'full',
    component: RxjsDemoComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'change-detection',
    pathMatch: 'full',
    component: ChangeDetectionComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    redirectTo: '/home'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class CoreRoutingModule {

}
