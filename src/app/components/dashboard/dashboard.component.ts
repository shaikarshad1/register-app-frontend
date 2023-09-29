import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterservService } from 'src/app/services/registerserv.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  isadmin=false
  fname=''
  lname=''

  constructor(private regserv:RegisterservService,private router:Router) { }

  ngOnInit(): void {
    this.regserv.getid(localStorage.getItem("id") || '').subscribe(
      data=>
      {
        this.fname=data.firstName
        this.lname=data.lastName
        console.log(data)
        console.log(data.role)
        if(data.role=='admin'){
          this.isadmin=true
        }
      },error=>{
        console.log(localStorage.getItem("id"))
        console.log("error in get id role")
      }
    )
  }

  rmvitem(){
    this.regserv.dologout();
    localStorage.removeItem("id")
    localStorage.removeItem("role")
    sessionStorage.removeItem("role")
    localStorage.removeItem("id")
  }

  profile(){
    this.router.navigate(['/user',localStorage.getItem("id")])
  }

}
