import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginAdminChildComponent } from './login-admin-child.component';

describe('LoginAdminChildComponent', () => {
  let component: LoginAdminChildComponent;
  let fixture: ComponentFixture<LoginAdminChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginAdminChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginAdminChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
