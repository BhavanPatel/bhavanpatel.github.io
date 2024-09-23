import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlcpComponent } from './glcp.component';

describe('GlcpComponent', () => {
  let component: GlcpComponent;
  let fixture: ComponentFixture<GlcpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GlcpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GlcpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
