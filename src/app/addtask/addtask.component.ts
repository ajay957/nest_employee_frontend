import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddtaskComponent {
  taskname=""
  description=""
  taskdate=""
  completedate=""
  taskstatus=""
  empid=""

  constructor(private api:ApiService){}

  readValues=()=>{
    let data:any={"taskname":this.taskname,"description":this.description,"taskdate":this.taskdate,"completedate":this.completedate,"taskstatus":this.taskstatus,"empid":this.empid}
    console.log(data)
    this.api.addTask(data).subscribe(
      (response:any)=>{
        if (response.status=="success") {
          alert("task added successfully")
          this.taskname=""
          this.description=""
          this.taskdate=""
          this.completedate=""
          this.taskstatus=""
          this.empid=""
        } else {
          alert("something went wrong")
        }
      }
    )
  }

}
