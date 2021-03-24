import { Component,  TemplateRef } from '@angular/core';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-toasts',
  templateUrl: './toasts.component.html',
  host: { '[class.ngb-toasts]': 'true' }
})
export class ToastsComponent {

  constructor(public  messageService:MessageService) { }

  isTemplate(toast) { return toast.textOrTpl instanceof TemplateRef; }

}
