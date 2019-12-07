import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginParentDashboardComponent } from './login-parent-dashboard.component';

describe('LoginParentDashboardComponent', () => {
  let component: LoginParentDashboardComponent;
  let fixture: ComponentFixture<LoginParentDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginParentDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginParentDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
