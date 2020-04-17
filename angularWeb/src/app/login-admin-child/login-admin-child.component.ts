import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FormGroup, Validators, FormControl } from "@angular/forms";
import { ServiceService } from "../service.service";
import { Router } from "@angular/router";

@Component({
  selector: "login-admin-child",
  templateUrl: "./login-admin-child.component.html",
  styleUrls: ["./login-admin-child.component.scss"],
})
export class LoginAdminChildComponent implements OnInit {
  loginAdminForm;
  userAction: boolean = false;
  userActionExecute: string;
  // @Output("onSubmit") onSubmit = new EventEmitter();

  constructor(private data: ServiceService, private router: Router) {}

  ngOnInit() {
    this.loginAdminForm = new FormGroup({
      Name: new FormControl("", [Validators.required]),
      Password: new FormControl("", [Validators.required]),
    });

    if (localStorage.getItem("token") !== null) {
      this.router.navigateByUrl("/admin-board");
    }
  }
  // Direction to the properties In The Form
  get Name() {
    return this.loginAdminForm.get("Name");
  }

  get Password() {
    return this.loginAdminForm.get("Password");
  }
  //

  //login The Admin And Insert A Token To Remeber Admin
  adminSubmit(loginAdminForm) {
    this.data.adminLogin(loginAdminForm).subscribe(
      (res) => {
        if (res == 200) {
          localStorage.setItem("token", "I will remember you ;)");
          this.router.navigateByUrl("/admin-board");
        } else {
          this.userAction = true;
          this.userActionExecute = "Wrong Username Or Password";
        }
      },
      (err) => {
        if (err.status == 0) this.userAction = true;
        this.userActionExecute = "Please check the connection to the server :/";
      }
    );
  }
}
