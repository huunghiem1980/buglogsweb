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
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-project-dashboard',
  templateUrl: './project-dashboard.component.html',
  styleUrls: ['./project-dashboard.component.css']
})
export class ProjectDashboardComponent implements OnInit, AfterViewInit {
  @ViewChild(LogListComponent)
  logList: LogListComponent;

  //Icons
  faPlusSquare = faPlusSquare;
  faTachometerAlt = faTachometerAlt;

  selectedProject: string;

  constructor(private modalService: NgbModal, private route: ActivatedRoute) { }
  

  ngOnInit(): void {
    console.log("Dashboard - ngOnInit....");
    this.initialize();
  }


  ngAfterViewInit() {
    console.log("Dashboard - ngAfterViewInit....");
    console.log("Selected PRoject...." + this.selectedProject);
    //Gán du_an cho LogListComponent lấy log từ DB
    this.logList.selectedProject = this.selectedProject;
  }

  initialize() {    
    // Get selected project from active route
    this.route.queryParams.subscribe(params => {
      this.selectedProject = params.project;
    });    
}

  openCreateLogForm() {
    let showLog = new Buglog();
    showLog.du_an = this.selectedProject;

    //Phải khai báo mục entryComponents: [LogUpdateComponent] trong file app.module.ts
    const modalRef = this.modalService.open(LogUpdateComponent, { backdrop: 'static' });
    modalRef.componentInstance.showLog = showLog;

    modalRef.result.then(
      (result) => {
        console.log("Tra ket qua create");
        console.log(result);
        this.logList.logs.push(result);
      },
      (Reason) => {
        
      }
    )
  }
}
