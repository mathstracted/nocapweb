import { Component, OnInit, DoCheck, ChangeDetectorRef } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private websocket: WebSocket;
  data: any;

  loginForm: FormGroup = this.fb.group({
    serverAddress: [null, Validators.required]
  });

  constructor(private fb: FormBuilder, private cd: ChangeDetectorRef) { }

  ngOnInit(): void {

  }

  connectToSocketServer() {
    this.websocket = new WebSocket(`ws:${this.loginForm.get('serverAddress').value}`);
    this.websocket.onopen = () => {
      console.log('Connected!!!');
    };
    this.websocket.onmessage = (data) => {
      this.data = data.data;
    }
  }

}
