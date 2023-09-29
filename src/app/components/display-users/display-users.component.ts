import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterservService } from 'src/app/services/registerserv.service';

@Component({
  selector: 'app-display-users',
  templateUrl: './display-users.component.html',
  styleUrls: ['./display-users.component.css']
})
export class DisplayUsersComponent implements OnInit {

  userlist:any;
  noDataDisplay=''
  
  togglebutton=false
  constructor(private router:Router,private regserv:RegisterservService) { }

  ngOnInit(): void {
    console.log(localStorage.getItem("id"))
    console.log(sessionStorage.getItem("id"))
   

    this.regserv.getid(localStorage.getItem("id") || '').subscribe(
      data=>{console.log(data.role)
        if(data.role=='admin'){
          this.togglebutton=true
        }
      },error=>{
        console.log("error in get id role")
      }
    )

    this.regserv.getall().subscribe(
      data=>{
        this.userlist=data,
        console.log(data)
       

      },
      error=>{
        console.log(error)
        this.noDataDisplay="Sorry! No Users Found."
        console.log('error man')
      }
    )
  }

  updateUser(id:string){
    this.router.navigate(['/update',id])
  }

  deleteuser(id:string){
    this.regserv.deleteuser(id).subscribe(
      data=>{
        
        this.ngOnInit(),
        console.log("done")
      },
      error=>{
        this.ngOnInit(),
        console.log(error)
      }
    )
  }

  indetailuser(id:string){
    this.router.navigate(['/user',id])

  }

}
