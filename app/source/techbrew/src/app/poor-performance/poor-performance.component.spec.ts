import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoorPerformanceComponent } from './poor-performance.component';

describe('PoorPerformanceComponent', () => {
  let component: PoorPerformanceComponent;
  let fixture: ComponentFixture<PoorPerformanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PoorPerformanceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoorPerformanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
