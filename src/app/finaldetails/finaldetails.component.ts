import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-finaldetails',
  templateUrl: './finaldetails.component.html',
  styleUrls: ['./finaldetails.component.css']
})
export class FinaldetailsComponent implements OnInit {
 name;
 email;
 survey;
 userdetails;
  constructor() { }

  ngOnInit() {
    this.userdetails=JSON.parse(localStorage.getItem('custname'));
    this.name=this.userdetails[0].cusname;
    this.email=this.userdetails[0].custemail;
    this.survey=this.userdetails[0].custservey;
  }


}
