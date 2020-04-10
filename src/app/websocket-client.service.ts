import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class WebsocketClientService implements Resolve<WebSocket> {
  wsAddress: string;

  constructor() { }

  setWebsocketAddress(wsAddress: string) {
    this.wsAddress = wsAddress;
  }

  // tslint:disable-next-line: variable-name
  resolve(_route: ActivatedRouteSnapshot, _state: RouterStateSnapshot): Observable<WebSocket> {
    return new Observable<WebSocket>((observer) => {
      try {
        const websocket = new WebSocket(`${this.wsAddress}`);
        websocket.onerror = () => {
          observer.error(new Error("Error connecting the websocket server!!!"));
        }
        websocket.onopen = () => {
          observer.next(websocket);
          observer.complete();
        };

      } catch (error) {
        observer.error(error);
      }

    });
  }

}
