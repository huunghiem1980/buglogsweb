import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartsModule } from 'ng2-charts';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogListComponent } from './log-list/log-list.component';
import { ProductSaleChartComponent } from './charts/product-sale-chart/product-sale-chart.component';
import { SaleTrafficChartComponent } from './charts/sale-traffic-chart/sale-traffic-chart.component';
import { AnnualSalesChartComponent } from './charts/annual-sales-chart/annual-sales-chart.component';
import { StoreSessionsChartComponent } from './charts/store-sessions-chart/store-sessions-chart.component';
import { NavComponent } from './nav/nav.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectDashboardComponent } from './project-dashboard/project-dashboard.component';
import { LogUpdateComponent } from './log-update/log-update.component';
import { ToastsComponent } from './toasts/toasts.component';


@NgModule({
  declarations: [
    AppComponent,
    LogListComponent,
    ProductSaleChartComponent,
    SaleTrafficChartComponent,
    AnnualSalesChartComponent,
    StoreSessionsChartComponent,
    NavComponent,
    ProjectListComponent,
    ProjectDashboardComponent,
    LogUpdateComponent,
    ToastsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ChartsModule,
    FontAwesomeModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [LogUpdateComponent] 
})
export class AppModule { }
