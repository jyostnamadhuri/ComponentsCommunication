import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-college',
  templateUrl: './college.component.html',
  styleUrls: ['./college.component.css']
})
export class CollegeComponent {
clgstudents : string[];
students : string[];
  constructor() {
    this.clgstudents=['Akshu','Sreehari','Jyostna'];
    this.students=['Sreehari','Akshu'];
  }


}
