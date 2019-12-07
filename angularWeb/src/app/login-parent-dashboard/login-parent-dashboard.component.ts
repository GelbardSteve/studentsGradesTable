import { Component, OnInit } from "@angular/core";
import { ServiceService } from "../service.service";
import { Router } from "@angular/router";

@Component({
  selector: "login-parent-dashboard",
  templateUrl: "./login-parent-dashboard.component.html",
  styleUrls: ["./login-parent-dashboard.component.scss"]
})
export class LoginParentDashboardComponent implements OnInit {
  isAdmin: boolean = false;

  constructor(private data: ServiceService, private router: Router) {}

  ngOnInit() {
    if (localStorage.getItem("token") !== null) {
      this.router.navigateByUrl("/admin-board");
    }
  }

  openAdmin() {
    this.isAdmin = !this.isAdmin;
  }

  //login The Admin And Insert A Token To Remeber Admin
  adminSubmit(adminValues) {
    this.data.adminLogin(adminValues).subscribe(res => {
      if (res == 200) {
        localStorage.setItem("token", "I will remember you ;)");
        this.router.navigateByUrl("/admin-board");
      } else {
        alert("Wrong User Name Or Password");
      }
    }, err => {
      if (err.status == 0)
        alert('Please check the connection to the server :/');
    });
  }
}
