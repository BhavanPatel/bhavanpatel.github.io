import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GclsComponent } from './gcls.component';

describe('GclsComponent', () => {
  let component: GclsComponent;
  let fixture: ComponentFixture<GclsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GclsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GclsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
