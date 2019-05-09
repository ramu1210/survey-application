import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-customersurvey',
  templateUrl: './customersurvey.component.html',
  styleUrls: ['./customersurvey.component.css']
})
export class CustomersurveyComponent implements OnInit {

  constructor(private location:Location,private route:Router) { }

  ngOnInit() {
  }
  selectoption = {
    qun1:'',
    qun2:'',
    qun3:'',
    qun4:'',
    qun5:''
  }
  addtasks(){
    this.route.navigate(['/finaldetails'])
  }
  backtosurvey(){
  this.location.back();
  }

}
