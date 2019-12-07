import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PostStudentsFormComponent } from './post-students-form.component';

describe('PostUserButtonComponent', () => {
  let component: PostStudentsFormComponent;
  let fixture: ComponentFixture<PostStudentsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostStudentsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostStudentsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
