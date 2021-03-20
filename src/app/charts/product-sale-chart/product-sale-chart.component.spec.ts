import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSaleChartComponent } from './product-sale-chart.component';

describe('ProductSaleChartComponent', () => {
  let component: ProductSaleChartComponent;
  let fixture: ComponentFixture<ProductSaleChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductSaleChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductSaleChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
