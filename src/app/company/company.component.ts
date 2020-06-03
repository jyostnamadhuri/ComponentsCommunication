import { EmployeeComponent } from './../employee/employee.component';
import { Component,ViewChild, ViewChildren ,QueryList} from '@angular/core';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent  {
companyName:string="Carbynetech";
@ViewChild(EmployeeComponent)emp:EmployeeComponent;
onClickMeClicked(){
  console.log(this.emp);
  this.emp.empName="Madhuri";
}

}

