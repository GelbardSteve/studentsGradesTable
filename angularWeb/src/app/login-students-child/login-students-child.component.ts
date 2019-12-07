import { Component, OnInit } from "@angular/core";
import { FormGroup, Validators, FormControl } from "@angular/forms";
import { ServiceService } from "../service.service";

@Component({
  selector: "login-students-child",
  templateUrl: "./login-students-child.component.html",
  styleUrls: ["./login-students-child.component.scss"]
})
export class LoginStudentsChildComponent implements OnInit {
  StudentInform;
  StudentsLoginInformation;

  constructor(private data: ServiceService) {}

  ngOnInit() {
    this.StudentInform = new FormGroup({
      students_number: new FormControl("", [Validators.required])
    });
  }
  // Direction to the properties
  get students_number() {
    return this.StudentInform.get("students_number");
  }

  submit(formValues) {
    this.data.studentInformation(formValues.students_number).subscribe(
      res => {
        if (res == "NotFound") {
          alert("Wrong Number");
        } else {
          this.StudentsLoginInformation = res;
        }
      },
      err => {
        if (err.status == 0)
          alert("Please check the connection to the server :/");
      }
    );
  }
}
