import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChatService } from '../services/chat.service';

@Component({
  selector: 'app-onlineusers',
  templateUrl: './onlineusers.component.html',
  styleUrls: ['./onlineusers.component.css'],
  providers: [ChatService]
})
export class OnlineusersComponent implements OnInit, OnDestroy {

  connection;
  users:any;

  constructor(private chatService: ChatService) {}

  ngOnInit() {
    this.connection = this.chatService.getOnlineUsers().subscribe(user => {
      this.users=user;
      
    })
  }

  ngOnDestroy() {
    this.connection.unsubscribe();
  }

}
