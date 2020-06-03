import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import { CollegeComponent } from './college/college.component';
import { CompanyComponent } from './company/company.component';
import { EmployeeComponent } from './employee/employee.component';
import { FormsModule } from '@angular/forms';
import { Company1Component } from './company1/company1.component';
import { Employee1Component } from './employee1/employee1.component';
import { Company2Component } from './company2/company2.component';
import { Employee2Component } from './employee2/employee2.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    CollegeComponent,
    CompanyComponent,
    EmployeeComponent,
    Company1Component,
    Employee1Component,
    Company2Component,
    Employee2Component
  ],
  imports: [
    BrowserModule,
  
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
