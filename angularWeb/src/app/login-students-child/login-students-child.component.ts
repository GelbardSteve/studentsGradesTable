import { Component, OnInit } from "@angular/core";
import { FormGroup, Validators, FormControl } from "@angular/forms";
import { ServiceService } from "../service.service";

@Component({
  selector: "login-students-child",
  templateUrl: "./login-students-child.component.html",
  styleUrls: ["./login-students-child.component.scss"],
})
export class LoginStudentsChildComponent implements OnInit {
  StudentInform;
  StudentsLoginInformation;
  userAction: boolean = false;
  showGrades: boolean = false;
  userActionExecute: string;
  showStudentsGrades: boolean = false;

  constructor(private data: ServiceService) {}

  ngOnInit() {
    this.StudentInform = new FormGroup({
      students_number: new FormControl("", [Validators.required]),
    });
  }
  // Direction to the properties
  get students_number() {
    return this.StudentInform.get("students_number");
  }

  submit(formValues) {
    this.data.studentInformation(formValues.students_number).subscribe(
      (res) => {
        if (res == "NotFound") {
          this.userAction = true;
          this.userActionExecute = "Wrong Number";
          this.showGrades = false;
        } else {
          this.userAction = false;
          this.StudentsLoginInformation = res;
          this.showGrades = true;
        }
      },
      (err) => {
        if (err.status == 0) this.userAction = true;
        this.userActionExecute = "Please check the connection to the server :/";
      }
    );
  }
}
