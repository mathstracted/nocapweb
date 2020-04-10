import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { CaptureMotionComponent } from './capture-motion/capture-motion.component';
import { WebsocketClientService } from '../websocket-client.service';


const routes: Routes = [
  {
    path: '',
    component: CaptureMotionComponent
  }
];

@NgModule({
  declarations: [CaptureMotionComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MotionCaptureRoutingModule { }
