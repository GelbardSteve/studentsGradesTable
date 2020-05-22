import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FormGroup, Validators, FormControl } from "@angular/forms";

@Component({
  selector: "post-students-form",
  templateUrl: "./post-students-form.component.html",
  styleUrls: ["./post-students-form.component.scss"],
})
export class PostStudentsFormComponent implements OnInit {
  updateUserForm;
  studentsNumberDataBinding;
  @Output("onSubmit") onSubmit = new EventEmitter();

  constructor() {}

  ngOnInit() {
    this.updateUserForm = new FormGroup({
      insertNewStudent: new FormGroup({
        students_name: new FormControl("", [Validators.required]),
        students_number: new FormControl("", [Validators.required]),
      }),
      updateGrades: new FormGroup({
        studentsGrades: new FormControl("", [Validators.required]),
        students_number: new FormControl("", [Validators.required]),
      }),
    });
  }
  // Direction to the properties
  get students_name() {
    return this.updateUserForm.get("insertNewStudent.students_name");
  }

  get students_number() {
    return this.updateUserForm.get("insertNewStudent.students_number");
  }
  //update grades
  get studentsGrades() {
    return this.updateUserForm.get("updateGrades.studentsGrades");
  }

  //
  submit(formValues) {
    this.onSubmit.emit(formValues);
  }

  onKeydown(event) {
    event.preventDefault();
  }

}
