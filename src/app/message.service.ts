import { Injectable, TemplateRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  messages: any[] = [];

  // add(message: string) {
  //   this.messages.push(message);
  // }

  // clear(){
  //   this.messages = [];
  // }

  show(textOrTpl: string | TemplateRef<any>, options: any = {}) {
    this.messages.push({ textOrTpl, ...options });
  }

  remove(message) {
    this.messages = this.messages.filter(t => t !== message);
  }
}
