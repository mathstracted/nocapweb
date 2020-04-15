import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { WebsocketClientService } from '../websocket-client.service';
import { Router } from '@angular/router';
import { MotionDataUploadService } from '../services/motion-data-upload.service';

@Component({
  selector: 'app-connect-to-nocap-desktop',
  templateUrl: './connect-to-nocap-desktop.component.html',
  styleUrls: ['./connect-to-nocap-desktop.component.scss']
})
export class ConnectToNocapDesktopComponent implements OnInit {

  constructor(private router: Router, private fb: FormBuilder, private motionUpload: MotionDataUploadService) { }

  motionServerConnectForm: FormGroup = this.fb.group({
    serverAddress: [null, Validators.required]
  });


  ngOnInit(): void {
    this.motionServerConnectForm.get('serverAddress').valueChanges.subscribe(console.log);
  }

  setMotionServerDetails() {
    this.motionUpload.setMotionUploadAddress(`https://${this.motionServerConnectForm.value.serverAddress}/motion-data`);
    this.router.navigate(["motion"]);
  }
}
