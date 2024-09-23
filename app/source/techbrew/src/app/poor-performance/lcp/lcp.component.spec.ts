import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LcpComponent } from './lcp.component';

describe('LcpComponent', () => {
  let component: LcpComponent;
  let fixture: ComponentFixture<LcpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LcpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LcpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
