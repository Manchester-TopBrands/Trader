import { Component } from '@angular/core';
import { webSocket, WebSocketSubject } from "rxjs/webSocket";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  ws : WebSocketSubject<any>;

  ngOnInit() {}

  constructor() {
    this.ws = webSocket({
      url: 'ws://179.127.13.149:8080/ws',
      deserializer: e => e.data
    });
  }
}
