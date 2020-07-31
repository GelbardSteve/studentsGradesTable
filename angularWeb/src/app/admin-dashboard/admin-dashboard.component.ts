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
  userAction: boolean = false;
  userActionExecute: string;
  showGrades: boolean = false;
  insertValuesToUpdateForm: any;
  name = "Angular 6";
  status: any[];
  formula: string = "Formula 1";
  data: any;

  openEditInsertForm = {
    openUpdateForm: false,
    openInsertForm: false,
  };

  constructor(
    private dataS: ServiceService,
    private router: Router,
    private orderPipe: OrderPipe
  ) {}

  options = {
    fieldSeparator: ",",
    quoteStrings: '"',
    decimalseparator: ".",
    headers: ["students_id", "students_name", "students_number", "grades"],
    showTitle: false,
    useBom: false,
    removeNewLines: false,
    keys: ["students_id", "students_name", "students_number", "studentsGrades"],
  };

  ngOnInit() {
    this.dataS.getUsers().subscribe((dataS) => {
      this.getAllStudents = dataS;
      this.data = dataS;
    });

    if (localStorage.getItem("token") == null) {
      this.router.navigateByUrl("/");
    }
  }

  reloadData() {
    this.dataS.getUsers().subscribe((data) => {
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
    this.dataS
      .postStudents2Users(InsertNewUser.insertNewStudent)
      .subscribe((res) => {
        if (res == "successful") {
          this.userAction = true;
          this.userActionExecute = "Add user succeed";
          setTimeout(() => {
            this.userAction = false;
          }, 1300);
        }
        this.reloadData();
        this.openEditInsertForm.openInsertForm = false;
      });
  }

  insertGrades(insertGrades) {
    this.dataS.postGrades(insertGrades.updateGrades).subscribe();
  }

  deletePost(deleteUser) {
    this.dataS.deleteUsers(deleteUser).subscribe((data) => {
      if (data.succeed) {
        this.userAction = true;
        this.userActionExecute = "Delete user succeed";
        setTimeout(() => {
          this.userAction = false;
        }, 1300);
      }
      this.reloadData();
    });
  }

  update(updateValues) {
    this.dataS.updateUsers(updateValues).subscribe((data) => {
      if (data == "Update succeed") {
        this.userAction = true;
        this.userActionExecute = "Update user succeed";
        setTimeout(() => {
          this.userAction = false;
        }, 1300);
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
    console.log(student);
  }

  showMoreGrades(e, grades) {
    if (e.target.className == "gradesOrder") {
      e.target.innerHTML = grades;
      e.target.className = "widthShowGreades";
    } else if (e.target.className == "widthShowGreades") {
      e.target.innerHTML = "Show Grades ▼";
      e.target.className = "gradesOrder";
    }
  }
}
