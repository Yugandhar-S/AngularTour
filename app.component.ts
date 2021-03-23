import { ElementSchemaRegistry } from '@angular/compiler';
import { Component } from '@angular/core';
import { EnrollmentService } from './enrollment.service';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  topics=['Angular','.Net','DevExpress'];
  topicHasError=true;

  constructor(private _enrollmentService:EnrollmentService){}

  validateTopic(value: string){
    if(value==='default')
    this.topicHasError=true;
    else
    this.topicHasError=false;
  }

  userModel=new User('','rob@test.com',8898546991,'default','morning',true);

  onSubmit(){
    this._enrollmentService.enroll(this.userModel).subscribe(
      data=>console.log("Success",data),
      error=>console.error("Error",error)
    )
  }


}
