import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login/login.component';
import { WebsocketClientService } from './websocket-client.service';
import { ConnectToNocapDesktopComponent } from './connect-to-nocap-desktop/connect-to-nocap-desktop.component';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

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
    resolve: { websocket: WebsocketClientService },
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
    MatInputModule,
    MatButtonModule,
    RouterModule.forRoot(routes, { enableTracing: true }),
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    MatInputModule,
    MatButtonModule,
  ]
})
export class AppRoutingModule { }
