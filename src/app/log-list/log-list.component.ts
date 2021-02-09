import { Component, OnInit } from '@angular/core';
import { Buglog } from '../buglog';
import { BuglogService } from "../buglog.service";

@Component({
  selector: 'app-log-list',
  templateUrl: './log-list.component.html',
  styleUrls: ['./log-list.component.css']
})
export class LogListComponent implements OnInit {

  logs : Buglog[];  

  constructor(private logService: BuglogService) { }
  
  getLogs() {
    this.logs = this.logService.getLogs();
  }

  ngOnInit(): void {
    this.getLogs();
  }

}
