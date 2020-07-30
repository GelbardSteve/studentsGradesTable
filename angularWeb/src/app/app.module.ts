import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { OrderModule } from 'ngx-order-pipe';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { PostStudentsFormComponent } from './post-students-form/post-students-form.component';
import { LoginParentDashboardComponent } from './login-parent-dashboard/login-parent-dashboard.component';
import { LoginAdminChildComponent } from './login-admin-child/login-admin-child.component';
import { LoginStudentsChildComponent } from './login-students-child/login-students-child.component';
import { UpdateStudentFormComponent } from './update-student-form/update-student-form.component';
import { Angular2CsvModule } from 'angular2-csv';

@NgModule({
  declarations: [
    AppComponent,
    AdminDashboardComponent,
    PostStudentsFormComponent,
    LoginParentDashboardComponent,
    LoginAdminChildComponent,
    LoginStudentsChildComponent,
    UpdateStudentFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,   
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    OrderModule,
    Angular2CsvModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
