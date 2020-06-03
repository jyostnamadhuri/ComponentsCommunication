import { Employee1Component } from './../employee1/employee1.component';
import { Component, ContentChild } from '@angular/core';

@Component({
  selector: 'app-company1',
  templateUrl: './company1.component.html',
  styleUrls: ['./company1.component.css']
})
export class Company1Component  {

 companyName:string="Carbynetech";
 @ContentChild(Employee1Component)emp:Employee1Component;
onClick(){
  console.log(this.emp);
  this.emp.empName='Varshitha';
}

}
