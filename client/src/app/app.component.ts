import { Component, OnInit } from '@angular/core';
import { ChatService } from './chat.service';
import * as io from "socket.io-client";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private chatService: ChatService ){}
  
  title = 'app';
  messages: any[] = [{name: "", msg: ""}];
  obj = {
    name: "",
    msg: ""
  };
  socket = io('http://localhost:4000');
  
  submitMsg(): void{
    this.socket.emit('save-message', this.obj);
  }

  ngOnInit(): void {
    this.socket.on('new-message', function (data) {
      console.log(data);
      this.messages.push(data);
    });
  }

  


}
