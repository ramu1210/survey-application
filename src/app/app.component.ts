import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Surveyapp';
   currentbanner=1;
   banners=3;
   sssss:string;
 text=["DarkForest","ColdMountains","RoadRiver"];
  bannerclickright(){
   alert(this.text[this.currentbanner-1]);

  /* if(this.banners==this.currentbanner){
       this.currentbanner=1;
  }else{
  this.currentbanner=this.currentbanner+1;
  }
  this.sssss=this.text[this.currentbanner-1]; */
} 
}
