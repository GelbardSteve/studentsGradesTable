import { AdminDashboardComponent } from "./admin-dashboard/admin-dashboard.component";
import { LoginParentDashboardComponent } from "./login-parent-dashboard/login-parent-dashboard.component";
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: "", component: LoginParentDashboardComponent },
  { path: "admin-board", component: AdminDashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
