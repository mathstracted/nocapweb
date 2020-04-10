import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

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
  websocket: WebSocket;

  constructor(private route: ActivatedRoute) {
    this.accelaration = { x: 0, y: 0, z: 0 };
    this.listener = this.captureMotionRotation.bind(this);
  }


  captureMotionRotation(event: DeviceMotionEvent) {
    this.interval = event.interval;
    this.accelaration.x = (event.acceleration.x);
    this.accelaration.y = (event.acceleration.y);
    this.accelaration.z = (event.acceleration.z);

    this.websocket.send(JSON.stringify(this.accelaration));
  }

  ngOnInit(): void {
    this.route.data.subscribe(({ websocket }) => {
      console.log(websocket);
      this.websocket = websocket;
      this.websocket.onmessage = console.log;
    });
    window.addEventListener('devicemotion', this.listener, true);
  }

  ngOnDestroy(): void {
    window.removeEventListener('devicemotion', this.listener);
  }
}
