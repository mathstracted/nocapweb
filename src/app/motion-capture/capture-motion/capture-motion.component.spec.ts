import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaptureMotionComponent } from './capture-motion.component';

describe('CaptureMotionComponent', () => {
  let component: CaptureMotionComponent;
  let fixture: ComponentFixture<CaptureMotionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaptureMotionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaptureMotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
