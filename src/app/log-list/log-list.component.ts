//Angular
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

//3rd Parties
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

//Project
import { Buglog } from '../buglog';
import { BuglogService } from "../services/buglog.service";
import { Message } from '../message';
import { MessageService } from '../services/message.service';
import { category, LOAI_LOG, TRANG_THAI_LOG } from '../category';
import { LogUpdateComponent } from '../log-update/log-update.component';


@Component({
  selector: 'app-log-list',
  templateUrl: './log-list.component.html',
  styleUrls: ['./log-list.component.css'],
  providers: []
})
export class LogListComponent implements OnInit,AfterViewInit {
  
  logs: Array<Buglog> = []; 
  deletedLog: Buglog;
  // returnedMessage: string;
  selectedProject: string = '';
  
  loai_logs: category[];
  trang_thai_logs: category[]; 


  constructor(private logService: BuglogService,
    private messageService: MessageService,
    private modalService: NgbModal) {
  }

  ngAfterViewInit() {
    console.log("Loglist - ngAfterViewInit....");
    this.initialize();
  }

  ngOnInit(): void {
    console.log("Loglist - ngOnInit....");
    // this.initialize();
  }
  

  private initialize() {    
    this.getAllLogs(this.selectedProject);
  }


  /*
  Retrieve all Logs from Backend
   */
  getAllLogs(project: string = "") {
    this.logService.getLogs(project)
      .subscribe((message: Message) => {
        console.log(message);
        this.logs = message.data;
        this.logs.map(l => {
          l.loai_log_str = LOAI_LOG.find(x => x.value == l.loai_log).label;
          l.trang_thai_str = TRANG_THAI_LOG.find(x => x.value == l.trang_thai_log).label;
        });
      },
        (error) => {
          console.log(error);
        }
      );
  }


  setLogDetails(log: Buglog) {
    const modalRef = this.modalService.open(LogUpdateComponent, { backdrop: 'static' })
    modalRef.componentInstance.showLog = log    
  }


  prepareDeleteLog(deleteModalContent: any, log: Buglog) {
    this.deletedLog = log;

    this.modalService.open(deleteModalContent).result.then(
      (result) => {
        this.deleteLog();
      },
      (reason) => {

      });
  }


  deleteLog() {
    this.logService.deleteLog(this.deletedLog.id)
      .subscribe((message: Message) => {
        console.log(message);
        // remove a deletedLog from logs list on view
        this.logs = this.logs.filter(log => {
          return log.id != this.deletedLog.id;
        })
        
        // add the delete message to message app for showing
        this.messageService.showSuccessMesage(message.message);
      },
        (error) => {
          console.log(error);
          let errMsg = "Xóa lỗi ! Error = " + error;
          this.messageService.showErrorMesage(errMsg);
        });
  }
  
}
