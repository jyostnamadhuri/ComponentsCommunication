import { Component,ViewChildren ,QueryList } from '@angular/core';
import { Employee2Component } from '../employee2/employee2.component';

@Component({
  selector: 'app-company2',
  templateUrl: './company2.component.html',
  styleUrls: ['./company2.component.css']
})
export class Company2Component  {

  companyName1:string="Carbynetechpvtlmtd";
  @ViewChildren(Employee2Component)emp1:QueryList<Employee2Component>;



  onClicked(){
    console.log(this.emp1);
    var a=this.emp1.toArray();
    for(var i=0;i<a.length;i++)
    {
      a[i].empname1="Sreehari";
    }
  }

}
