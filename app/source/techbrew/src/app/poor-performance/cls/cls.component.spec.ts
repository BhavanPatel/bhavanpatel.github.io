import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClsComponent } from './cls.component';

describe('ClsComponent', () => {
  let component: ClsComponent;
  let fixture: ComponentFixture<ClsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
