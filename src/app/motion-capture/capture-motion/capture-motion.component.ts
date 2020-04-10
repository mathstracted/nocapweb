import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-capture-motion',
  templateUrl: './capture-motion.component.html',
  styleUrls: ['./capture-motion.component.scss']
})
export class CaptureMotionComponent implements OnInit, OnDestroy {

  accelaration: { x: number, y: number, z: number };
  rotationalAcc: { x: number, y: number, z: number };
  listener;
  interval = 0;
  constructor() {
    this.accelaration = { x: 0, y: 0, z: 0 };
    this.listener = this.captureMotionRotation.bind(this);
  }


  captureMotionRotation(event: DeviceMotionEvent) {
    this.interval = event.interval;
    this.accelaration.x = Math.floor(event.acceleration.x);
    this.accelaration.y = Math.floor(event.acceleration.y);
    this.accelaration.z = Math.floor(event.acceleration.z);
  }

  ngOnInit(): void {
    window.addEventListener('devicemotion', this.listener, true);
  }

  ngOnDestroy(): void {
    window.removeEventListener('devicemotion', this.listener);
  }
}
