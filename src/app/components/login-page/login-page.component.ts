import { Component, OnInit } from '@angular/core';
import { RegisterservService } from 'src/app/services/registerserv.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  credentials={
    username:"",
    password:""
  };
  InvalidLogin='';
  iduser!:any;

  constructor(private regserv:RegisterservService) { }

  ngOnInit(): void {
  }

  formsubmit(){
    console.log(this.credentials.username+this.credentials.password);
    localStorage.setItem("id",this.credentials.username)
    sessionStorage.setItem("id",this.credentials.username)

    this.regserv.dologin(this.credentials.username,this.credentials.password).subscribe(
      data=>{
        this.getrole(this.credentials.username)
        window.location.href="/dashboard"
      },error=>{this.InvalidLogin="Bad Credintails",
      this.credentials.password='',
    this.credentials.username=''}
    )
  }
   

    getrole(id:string){
      this.regserv.getid(localStorage.getItem("id") || '').subscribe(
        data=>{console.log(data.role)
          if(data.role=='admin'){
           localStorage.setItem("role","admin")
           sessionStorage.setItem("role","admin")
          }
        },error=>{
          console.log("error in get id role")
        }
      )
    }
  }


