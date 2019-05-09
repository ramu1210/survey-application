import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeesurveyComponent } from './employeesurvey/employeesurvey.component';
import { StudentserveyComponent } from './studentservey/studentservey.component';
import { CustomersurveyComponent } from './customersurvey/customersurvey.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { FinaldetailsComponent } from './finaldetails/finaldetails.component';

const routes: Routes = [
  {path:'',component:UserdetailsComponent},
  {path:'employeesurvey',component:EmployeesurveyComponent},
  {path:'StudentSurvey',component:StudentserveyComponent},
  {path:'CustomerSurvey',component:CustomersurveyComponent},
  {path:'finaldetails',component:FinaldetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
