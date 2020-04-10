import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { WebsocketClientService } from '../websocket-client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-connect-to-nocap-desktop',
  templateUrl: './connect-to-nocap-desktop.component.html',
  styleUrls: ['./connect-to-nocap-desktop.component.scss']
})
export class ConnectToNocapDesktopComponent implements OnInit {

  constructor(private router: Router, private fb: FormBuilder, private wsService: WebsocketClientService) { }

  wsConnectForm: FormGroup = this.fb.group({
    serverAddress: [null, Validators.required]
  });

  ngOnInit(): void {
    this.wsConnectForm.get('serverAddress').valueChanges.subscribe(console.log);
  }

  setSocketServerDetails() {
    this.wsService.setWebsocketAddress(`ws://${this.wsConnectForm.value.serverAddress}`);
    this.router.navigate(["motion"]);
  }
}
