import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { RegisterservService } from 'src/app/services/registerserv.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  user =new User()
  role=''

  constructor(private regserv:RegisterservService,private router:Router) { }

  ngOnInit(): void {
  }


  adduser(){
   
    if(localStorage.getItem("role")!='admin'){
    this.user.role="user"}
    else{
      this.user.role="admin"
    }
    this.regserv.registeruser(this.user).subscribe(
      data=>{
        this.router.navigate(['/dashboard'])
      },error=>{console.log(error),
        this.router.navigate(['/dashboard'])}
    )

  }

}
