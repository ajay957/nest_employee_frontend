import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent {
  empcode=""
  empname=""
  designation=""
  email=""
  phno=""
  username=""
  password=""

  constructor(private api:ApiService){}

  readValues=()=>{
    let data:any={"empcode":this.empcode,"empname":this.empcode,"designation":this.designation,"email":this.email,"phno":this.phno,"username":this.username,"password":this.password}
    console.log(data)
    this.api.addEmployee(data).subscribe(
      (response:any)=>{
        console.log(response)
        if (response.status=="success")
        {
          alert("employee added successfully")
          this.empcode=""
          this.empname=""
          this.designation=""
          this.email=""
          this.phno=""
          this.username=""
          this.password=""
        }
        else{
          alert("something went wrong")
        }
      }
    )
  }

}
