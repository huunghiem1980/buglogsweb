//Angular
import { Component, Input, OnInit } from '@angular/core';

//3rd Parties 
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

//Project
import { Buglog } from '../buglog';
import { BuglogService } from '../buglog.service';
import { category, LOAI_LOG, TRANG_THAI_LOG } from '../category';
import { Message } from '../message';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-log-update',
  templateUrl: './log-update.component.html',
  styleUrls: ['./log-update.component.css']
})
export class LogUpdateComponent implements OnInit {
  @Input() showLog: Buglog;
  
  loai_logs: category[];
  trang_thai_logs: category[];
  

  constructor(public activeModal: NgbActiveModal,
    private logService: BuglogService,
    private messageService: MessageService
  ) { }


  ngOnInit(): void {
    this.initialize();
  }

  private initialize() {
    this.loai_logs = LOAI_LOG;
    this.trang_thai_logs = TRANG_THAI_LOG;
  }
  

  saveLog() {
    if (this.showLog.id) {
      console.log("Cap nhat log");
      this.updateLog();
    }
    else {
      console.log("Tao moi log");
      this.createLog();
    }

    this.activeModal.close();
  }
  

  updateLog() {
    this.logService.updateLog(this.showLog)
      .subscribe((message: Message) => {
        console.log(message);
        this.showLog.loai_log_str = LOAI_LOG.find(x => x.value == this.showLog.loai_log).label;
        this.showLog.trang_thai_str = TRANG_THAI_LOG.find(x => x.value == this.showLog.trang_thai_log).label;
        
        let msg: string = "Cập nhật thành công !!"
        this.showSuccessToast(msg);
      },
        (error) => {
          console.log(error);
          let errMsg = "Cập nhật lỗi ! Error = " + error;
          this.showErrorToast(errMsg);
        });
  }


  createLog() {
    console.log(this.showLog);
    this.logService.createLog(this.showLog)
      .subscribe((message: Message) => {
        console.log(message);
        // this.logs.push(message.data[0]);
        this.showLog.loai_log_str = LOAI_LOG.find(x => x.value == this.showLog.loai_log).label;
        this.showLog.trang_thai_str = TRANG_THAI_LOG.find(x => x.value == this.showLog.trang_thai_log).label;
        let msg = "Tạo mới thành công !";
        this.showSuccessToast(msg);
      },
        (error) => {
          console.log(error);
          let errMsg = "Tạo mới thất bại !"
          this.showErrorToast(errMsg);
        });
  }
  

  showSuccessToast(msg) {
    this.messageService.show(msg, { classname: 'bg-success text-light', delay: 10000 });
  }


  showErrorToast(msg) {
    this.messageService.show(msg, { classname: 'bg-danger text-light', delay: 10000 });
  }
}
