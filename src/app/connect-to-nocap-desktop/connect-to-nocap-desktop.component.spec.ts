import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectToNocapDesktopComponent } from './connect-to-nocap-desktop.component';

describe('ConnectToNocapDesktopComponent', () => {
  let component: ConnectToNocapDesktopComponent;
  let fixture: ComponentFixture<ConnectToNocapDesktopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnectToNocapDesktopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectToNocapDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
