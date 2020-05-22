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
      studentsGrades: new FormControl("", [
        Validators.required
      ]),
      // English: new FormControl("", [
      //   Validators.required
      // ]),

      // students_number: new FormControl("", []),
      // History: new FormControl("", [
      //   Validators.required,
      //   Validators.max(100),
      //   Validators.min(0)
      // ])
    });
  }
  // Direction to the properties
  get students_id() {
    return this.updateUserForm.get("students_id");
  }

  get studentsGrades() {
    return this.updateUserForm.get("studentsGrades");
  }

  // get English() {
  //   return this.updateUserForm.get("English");
  // }

  // get Students_number() {
  //   return this.updateUserForm.get("Students_number");
  // }
  // get History() {
  //   return this.updateUserForm.get("History");
  // }
  //
  submit(updateFormValues) {
    console.log(this.insertValuesUpdate)
    this.onSubmit.emit(updateFormValues);
  }

  onKeydown(event){
    event.preventDefault();
  }
}
