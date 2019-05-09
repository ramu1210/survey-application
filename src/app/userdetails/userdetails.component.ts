import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {
  custemail;
  custname;
  custsurvey='';
  constructor(private route:Router) { }

  ngOnInit() {
  }
  addtasks(){
  
    if(this.custsurvey=='Employee Survey'){
      this.route.navigate(['/employeesurvey']);
    }else if(this.custsurvey=='Customer Survey'){
      this.route.navigate(['/CustomerSurvey']);
    } else if(this.custsurvey=='Student Survey'){
      this.route.navigate(['/StudentSurvey']);
    }else{
      alert("Select Survey Option");
      this.route.navigate(['/']);
    }
    var a = [{cusname:this.custname,custemail:this.custemail,custservey:this.custsurvey}]
   localStorage.setItem('custname',JSON.stringify(a));
   console.log(JSON.parse(localStorage.getItem("custname")));
  }

}
