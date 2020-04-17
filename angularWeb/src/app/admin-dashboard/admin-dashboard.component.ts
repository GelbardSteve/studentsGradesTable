import { Component, OnInit } from "@angular/core";
import { ServiceService } from "../service.service";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { OrderPipe } from "ngx-order-pipe";

@Component({
  selector: "app-admin-dashboard",
  templateUrl: "./admin-dashboard.component.html",
  styleUrls: ["./admin-dashboard.component.scss"],
})
export class AdminDashboardComponent implements OnInit {
  getAllStudents: Observable<[]>;
  p: number = 1;
  order: string = "students_name";
  reverse: boolean = false;
  userAction:boolean = false;
  userActionExecute: string;

  insertValuesToUpdateForm: any;

  openEditInsertForm = {
    openUpdateForm: false,
    openInsertForm: false,
  };

  constructor(
    private data: ServiceService,
    private router: Router,
    private orderPipe: OrderPipe
  ) {}

  ngOnInit() {
    this.data.getUsers().subscribe((data) => {
      this.getAllStudents = data;
    });

    if (localStorage.getItem("token") == null) {
      this.router.navigateByUrl("/");
    }
  }

  reloadData() {
    this.data.getUsers().subscribe((data) => {
      this.getAllStudents = data;
    });
  }

  //Open And Close Update/ Insert stdudents Forms
  openUpdateForm() {
    this.openEditInsertForm.openUpdateForm = !this.openEditInsertForm
      .openUpdateForm;
  }

  //open insert student form
  openNewUserForm() {
    this.openEditInsertForm.openInsertForm = !this.openEditInsertForm
      .openInsertForm;
  }
  //

  // //Insert Delete Update students
  insertUser(InsertNewUser) {
    this.data
      .postStudents2Users(InsertNewUser.insertNewStudent)
      .subscribe((res) => {
        if (res == "successful") {
          this.userAction = true;
          this.userActionExecute = "Add user succeed";
          setTimeout(() => {
            this.userAction = false;
          }, 3000);
        }
        this.reloadData();
        this.openEditInsertForm.openInsertForm = false;
      });
  }

  insertGrades(insertGrades) {
    this.data.postGrades(insertGrades.updateGrades).subscribe();
  }

  deletePost(deleteUser) {
    this.data.deleteUsers(deleteUser).subscribe((data) => {
      if (data.succeed) {
        this.userAction = true;
        this.userActionExecute = "Delete user succeed";
        setTimeout(() => {
          this.userAction = false;
        }, 3000);
      }
      this.reloadData();
    });
  }

  update(updateValues) {
    this.data.updateUsers(updateValues).subscribe((data) => {
      if (data == "Update succeed") {
        this.userAction = true;
        this.userActionExecute = "Update user succeed";
        setTimeout(() => {
          this.userAction = false;
        }, 3000);
      }
      this.reloadData();
      this.openEditInsertForm.openUpdateForm = false;
    });
  }
  // //

  logout() {
    localStorage.removeItem("token");
    this.router.navigate(["/"]);
  }

  //Sort the table
  setOrder(value: any) {
    if (this.order === value) {
      this.reverse = !this.reverse;
    }
    this.order = value;
  }

  // //just try
  bindingDatatoUpdatefields(student) {
    this.insertValuesToUpdateForm = student;
  }
}
