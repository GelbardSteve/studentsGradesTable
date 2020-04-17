import { Component, OnInit } from "@angular/core";

@Component({
  selector: "login-parent-dashboard",
  templateUrl: "./login-parent-dashboard.component.html",
  styleUrls: ["./login-parent-dashboard.component.scss"]
})
export class LoginParentDashboardComponent implements OnInit {
  isAdmin: boolean = false;

  constructor() {}

  ngOnInit() {}

  openAdmin() {
    this.isAdmin = !this.isAdmin;
  }
}
