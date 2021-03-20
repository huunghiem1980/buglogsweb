import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleTrafficChartComponent } from './sale-traffic-chart.component';

describe('SaleTrafficChartComponent', () => {
  let component: SaleTrafficChartComponent;
  let fixture: ComponentFixture<SaleTrafficChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaleTrafficChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaleTrafficChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
