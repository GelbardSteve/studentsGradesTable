import { Component, OnInit, Output, Input, EventEmitter } from "@angular/core";
import { FormGroup, Validators, FormControl } from "@angular/forms";

@Component({
  selector: "update-student-form",
  templateUrl: "./update-student-form.component.html",
  styleUrls: ["./update-student-form.component.scss"]
})
export class UpdateStudentFormComponent implements OnInit {
  updateUserForm;
  @Output("onSubmit") onSubmit = new EventEmitter();
  @Input("insertValuesUpdate") insertValuesUpdate: any;

  constructor() {}

  ngOnInit() {
    this.updateUserForm = new FormGroup({
      students_id: new FormControl("", [Validators.required]),
      Math: new FormControl("", [
        Validators.required,
        Validators.max(100),
        Validators.min(0)
      ]),
      English: new FormControl("", [
        Validators.required,
        Validators.max(100),
        Validators.min(0)
      ]),
      History: new FormControl("", [
        Validators.required,
        Validators.max(100),
        Validators.min(0)
      ])
    });
  }
  // Direction to the properties
  get students_id() {
    return this.updateUserForm.get("students_id");
  }

  get Math() {
    return this.updateUserForm.get("Math");
  }

  get English() {
    return this.updateUserForm.get("English");
  }
  get History() {
    return this.updateUserForm.get("History");
  }
  //
  submit(updateFormValues) {
    this.onSubmit.emit(updateFormValues);
  }
}
