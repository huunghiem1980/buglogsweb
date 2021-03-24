import { Injectable, TemplateRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  messages: any[] = [];

  
  show(textOrTpl: string | TemplateRef<any>, options: any = {}) {
    this.messages.push({ textOrTpl, ...options });
  }


  remove(message) {
    this.messages = this.messages.filter(t => t !== message); 
  }


  showSuccessMesage(msg) {
    this.show(msg, { classname: 'bg-success text-light', delay: 10000 });
  }


  showErrorMesage(msg) {
    this.show(msg, { classname: 'bg-danger text-light', delay: 10000 });
  }
}
