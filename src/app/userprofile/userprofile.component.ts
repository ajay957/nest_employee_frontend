import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent {
empcode:any=""
data:any=[]
constructor(private api:ApiService){
  this.empcode=localStorage.getItem("userInfo")
  let data:any={
    "empcode":this.empcode
  }
  this.api.employeeView().subscribe(
    (response:any)=>
    {
      console.log(response)
      this.data=response
    }
  )
}

}
