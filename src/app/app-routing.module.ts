//Angular
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Project
import { LogListComponent } from './log-list/log-list.component';
import { ProjectDashboardComponent } from './project-dashboard/project-dashboard.component';
import { ProjectListComponent } from './project-list/project-list.component';




const routes: Routes = [
  { path: 'logs', component: LogListComponent },
  { path: 'projects', component: ProjectListComponent },
  { path: 'dashboard', component: ProjectDashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
