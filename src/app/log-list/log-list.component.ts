//Angular
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

//Project
import { Buglog, Project } from '../buglog';
import { BuglogService } from "../buglog.service";
import { Message } from '../message';
import { MessageService } from '../message.service';
import {category, LOAI_LOG, TRANG_THAI_LOG} from '../category'
import { ProjectService } from '../project.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LogUpdateComponent } from '../log-update/log-update.component';


@Component({
  selector: 'app-log-list',
  templateUrl: './log-list.component.html',
  styleUrls: ['./log-list.component.css'],
  providers: []
})
export class LogListComponent implements OnInit {
  
  logs: Array<Buglog> = []; 
  deletedLog: Buglog;
  returnedMessage: string;
  selectedProject: string = '';
  
  loai_logs: category[];
  trang_thai_logs: category[];
 


  constructor(private logService: BuglogService,
    private messageService: MessageService,
    private route: ActivatedRoute,
    private modalService: NgbModal) {
  }


  ngOnInit(): void {
    this.initialize();
  }
  

  private initialize() {
    // this.loai_logs = LOAI_LOG;
    // this.trang_thai_logs = TRANG_THAI_LOG;

    // Get selected project from active route
    this.route.queryParams.subscribe(params => {
      this.selectedProject = params.project;
    });

    this.getAllLogs(this.selectedProject);
    //this.getAllProjects();
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


  prepareDeleteLog(log: Buglog) {
    this.deletedLog = log;
    this.returnedMessage = undefined;
    
  }


  deleteLog() {
    this.logService.deleteLog(this.deletedLog.id)
      .subscribe((message: Message) => {
        console.log(message);
        // remove a deletedLog from logs list on view
        this.logs = this.logs.filter(log => {
          return log.id != this.deletedLog.id;
        })
        
        // set a showing message in delete modal
        this.returnedMessage = message.message;

        // add the delete message to message app for showing
        this.showSuccessToast(message.message);
      },
        (error) => {
          console.log(error);
          let errMsg = "Xóa lỗi ! Error = " + error;
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
