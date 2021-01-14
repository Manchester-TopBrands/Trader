import { Position } from './../models/position.model';
import { State } from './../models/state.enum';
import { Component} from '@angular/core';
import { Data } from '../models/data.model';
import { webSocket, WebSocketSubject } from "rxjs/webSocket";
import { Status } from '../models/status.enum';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  ws: WebSocketSubject<any>;
  data: Data;



  constructor(
  ) {
    this.ws = webSocket({
      url: 'ws://179.127.13.149:8080/ws',
      deserializer: e => e.data
    });
    this.ws.subscribe(
      msg => { this.data = JSON.parse(msg); this.getTraderInformation() }, // Called whenever there is a message from the server.
      //msg => { this.data = JSON.parse(msg); console.log(this.data); }, // Called whenever there is a message from the server.
      err => console.log(err), // Called if at any point WebSocket API signals some kind of error.
      () => console.log('complete') // Called when connection is closed (for whatever reason).
    );
  }
  getTraderInformation() {
    console.log(this.data.Status);
    if (this.data.Status.toString() === '0') {
      this.data.Status = Status.PAUSED;
    } else if (this.data.Status.toString() === '1') {
      this.data.Status = Status.AWAITING;
    } else {
      this.data.Status = Status.RUNNING;
    }
    var i: number;
    for (i = 0; i < this.data.Strategies.length; i++) {

      // if (this.data.Status == Status.AWAITING) {
      //   this.data.Strategies[i].ArbitIndex = this.data.Quotes.Arbit.Ask - this.data.Quotes.Arbit.Bid;
      // }

      if (this.data.Strategies[i].Position.State.toString() === '0') {
        this.data.Strategies[i].Position.State = State.OPEN;
      } else if (this.data.Strategies[i].Position.State.toString() === '1') {
        this.data.Strategies[i].Position.State = State.SHORT;
      } else if (this.data.Strategies[i].Position.State.toString() === '2') {
        this.data.Strategies[i].Position.State = State.LONG;
      } else {
        this.data.Strategies[i].Position.State = "Timer " + (-this.data.Strategies[i].Position.State).toString();
      }
    }
  }
}
