//Angular
import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

//Project
import { Project } from '../buglog';
import { Message } from '../message';
import { ProjectService } from '../services/project.service';

 

@Component({ 
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  projects: Project[];

  constructor(private projectService:ProjectService, private router:Router) { }

   ngOnInit(): void {     
     this.initialize();
   }
  
  private initialize() {
    this.getProjects();
  }

  getProjects() {
    this.projectService.getProjects()
      .subscribe((message: Message) => {
        console.log(message);
        this.projects = message.data;
      }, (error) => {
          console.log(error);
      });
  }

  gotoLogs(selectedProject) {
    
    let navigationExtras: NavigationExtras = {
            queryParams: {
                project: selectedProject.id,
            }
        }
    this.router.navigate(['dashboard'], navigationExtras);
  }



 

}
