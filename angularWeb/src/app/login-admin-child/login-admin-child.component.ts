import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FormGroup, Validators, FormControl } from "@angular/forms";

@Component({
  selector: "login-admin-child",
  templateUrl: "./login-admin-child.component.html",
  styleUrls: ["./login-admin-child.component.scss"]
})
export class LoginAdminChildComponent implements OnInit {
  loginAdminForm;
  @Output("onSubmit") onSubmit = new EventEmitter();

  constructor() {}

  ngOnInit() {
    this.loginAdminForm = new FormGroup({
      Name: new FormControl("", [Validators.required]),
      Password: new FormControl("", [Validators.required])
    });
  }
  // Direction to the properties In The Form
  get Name() {
    return this.loginAdminForm.get("Name");
  }

  get Password() {
    return this.loginAdminForm.get("Password");
  }
  //

  submit(formValues) {
    this.onSubmit.emit(formValues);
  }
}
