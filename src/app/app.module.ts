import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { EmployeeComponent } from './employee/employee.component';
import { EmployeesurveyComponent } from './employeesurvey/employeesurvey.component';
import { StudentserveyComponent } from './studentservey/studentservey.component';
import { CustomersurveyComponent } from './customersurvey/customersurvey.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { FinaldetailsComponent } from './finaldetails/finaldetails.component';
//import { SurveyquestionsComponent } from './surveyquestions/surveyquestions.component';

@NgModule({
  declarations: [
    AppComponent,
    //EmployeeComponent,
    EmployeesurveyComponent,
    StudentserveyComponent,
    CustomersurveyComponent,
    UserdetailsComponent,
    FinaldetailsComponent,
    //SurveyquestionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
