import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginStudentsChildComponent } from './login-students-child.component';

describe('LoginStudentsChildComponent', () => {
  let component: LoginStudentsChildComponent;
  let fixture: ComponentFixture<LoginStudentsChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginStudentsChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginStudentsChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
