import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GinpComponent } from './ginp.component';

describe('GinpComponent', () => {
  let component: GinpComponent;
  let fixture: ComponentFixture<GinpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GinpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GinpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
