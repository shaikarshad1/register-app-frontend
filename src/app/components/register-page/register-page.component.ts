import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { RegisterservService } from 'src/app/services/registerserv.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  user=new User();
  constructor(private router:Router,private regserv:RegisterservService) { }

  ngOnInit(): void {
  }

  doregister(){
    this.user.role='user'
     this.regserv.registeruser(this.user).subscribe()
     this.router.navigate(['/'])
     //.subscribe(
    //   data=>{
    //     console.log(data),
    //     this.router.navigate(['/'])
    //   },error=>{
    //     console.log(error)
    //     console.log("error")
    //   }
    // )
    
  }

}
