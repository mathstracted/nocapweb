import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MotionDataUploadService } from 'src/app/services/motion-data-upload.service';

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
  serialId = 0;


  constructor(private route: ActivatedRoute, private motionUploadService: MotionDataUploadService) {
    this.accelaration = { x: 0, y: 0, z: 0 };
    this.listener = this.captureMotionRotation.bind(this);
  }


  captureMotionRotation(event: DeviceMotionEvent) {
    console.log("TRIGGER");

    this.interval = event.interval;
    this.accelaration.x = (event.acceleration.x);
    this.accelaration.y = (event.acceleration.y);
    this.accelaration.z = (event.acceleration.z);

    this.motionUploadService.uploadData({
      accelaration: this.accelaration,
      interval: this.interval,
      serial: this.serialId++
    })
      .subscribe((res: any) => {
      }, console.error
      );

  }

  ngOnInit(): void {
    window.addEventListener('devicemotion', this.listener, true);
  }

  ngOnDestroy(): void {
    window.removeEventListener('devicemotion', this.listener);
  }
}
