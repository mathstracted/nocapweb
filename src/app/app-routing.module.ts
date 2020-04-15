import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login/login.component';
import { ConnectToNocapDesktopComponent } from './connect-to-nocap-desktop/connect-to-nocap-desktop.component';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "connect-to-desktop",
    component: ConnectToNocapDesktopComponent
  },
  {
    path: "motion",
    loadChildren: () => import('./motion-capture/motion-capture.module').then(mod => mod.MotionCaptureModule)
  },
  {
    path: "**",
    redirectTo: 'login'
  }
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule,
    MatButtonModule,
    RouterModule.forRoot(routes, { enableTracing: false }),
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    MatInputModule,
    MatButtonModule,
  ]
})
export class AppRoutingModule { }
