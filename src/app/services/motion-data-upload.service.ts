import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MotionDataUploadService {
  private motionUploadAddress;
  constructor(private http: HttpClient) { }


  setMotionUploadAddress(wsAddress: string) {
    this.motionUploadAddress = wsAddress;
  }

  uploadData(motion) {
    console.log("Uploading", motion);
    return this.http.post(this.motionUploadAddress, motion);
  }
}
