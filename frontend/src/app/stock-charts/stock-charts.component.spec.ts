import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockChartsComponent } from './stock-charts.component';

describe('StockChartsComponent', () => {
  let component: StockChartsComponent;
  let fixture: ComponentFixture<StockChartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockChartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
