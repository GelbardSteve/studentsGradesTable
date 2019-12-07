import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
@Injectable({
  providedIn: "root"
})
export class ServiceService {
  studentsDbUrl = "http://localhost:3000/students2";
  gradesDbUrl = "http://localhost:3000/grades";
  urlLoginAdmin = "http://localhost:3000/login";

  constructor(private http: HttpClient) {}

 
  getUsers() : Observable<any> {
    return <any> this.http.get(this.studentsDbUrl);
  }

  // // Post/ Delete/ Update students in adminDashbard
  postStudents2Users(updateValues) : Observable<any> {
    return this.http.post(this.studentsDbUrl, updateValues);
  }

  postGrades(updateValues) : Observable<any> {
    return this.http.post(this.gradesDbUrl, updateValues);
  }

  deleteUsers(student) : Observable<any> {
    return this.http.delete(this.studentsDbUrl + "/" + student.students_id);
  }

  updateUsers(value) : Observable<any> {
    return this.http.put(this.gradesDbUrl, value);
  }
  // //************************************************/

  //Login The Admin
  adminLogin(adminData) : Observable<any> {
    return this.http.post(this.urlLoginAdmin, adminData)
  }

  // //Login The Students
  studentInformation(studentsLoginData) : Observable<any> {
    return this.http.get(this.studentsDbUrl + "/" + studentsLoginData);
  }
}
