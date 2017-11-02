/*
 * Real time private chatting app using Angular 2,Nodejs, mongodb and Socket.io
 * @author Shashank Tiwari
 */


import { Injectable } from '@angular/core';

import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

import { config } from '../../config/config';

/*npm install @types/socket.io-client --save
 */
import * as io from 'socket.io-client';

@Injectable()
export class SocketService {

  config = config;
  private socket;

  constructor() {}

  /* 
   * Method to connect the users to socket
   */
  connectSocket(userId: string) {
    this.socket = io.connect(this.config.connect.url + this.config.connect.port, { query: `userId=${userId}` });
  }

  /* 
   * Method to emit the add-messages event.
   */
  sendMessage(message: any): void {
    this.socket.emit('add-message', message);
  }

  /* 
   * Method to emit the logout event.
   */
  logout(userId): any {

    this.socket.emit('logout', userId);

    let observable = new Observable(observer => {
      this.socket.on('logout-response', (data) => {
        observer.next(data);
      });

      return () => {

        this.socket.disconnect();
      };
    })
    return observable;
  }

  /* 
   * Method to receive add-message-response event.
   */
  receiveMessages(): any {
    let observable = new Observable(observer => {
      this.socket.on('add-message-response', (data) => {
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      };
    });
    return observable;
  }

  /* 
   * Method to receive chat-list-response event.
   */
  getChatList(userId: string): any {

    this.socket.emit('chat-list', { userId: userId });

    let observable = new Observable(observer => {
      this.socket.on('chat-list-response', (data) => {
        console.log(JSON.stringify(data, null, 2));
        observer.next(data);
      });

      return () => {
        this.socket.disconnect();
      };
    })
    return observable;
  }

}
