//Angular
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

//3rd Parties 
import { faTachometerAlt } from '@fortawesome/free-solid-svg-icons';
import { faPlusSquare,} from '@fortawesome/free-regular-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

//Project
import { LogUpdateComponent } from '../log-update/log-update.component';
import { Buglog } from '../buglog';
import { LogListComponent } from '../log-list/log-list.component';


@Component({
  selector: 'app-project-dashboard',
  templateUrl: './project-dashboard.component.html',
  styleUrls: ['./project-dashboard.component.css']
})
export class ProjectDashboardComponent implements OnInit, AfterViewInit {
  @ViewChild(LogListComponent) logList: LogListComponent;

  //Icons
  faPlusSquare = faPlusSquare;
  faTachometerAlt = faTachometerAlt;

  selectedProject: string;

  constructor(private modalService: NgbModal) { }  
  

  ngOnInit(): void { }


  ngAfterViewInit() { }


  openCreateLogForm() {    
    let showLog = new Buglog();
    showLog.du_an = this.selectedProject;

    //Phải khai báo mục entryComponents: [LogUpdateComponent] trong file app.module.ts
    const modalRef = this.modalService.open(LogUpdateComponent,{backdrop:'static'});
    modalRef.componentInstance.showLog = showLog;
  }

}
