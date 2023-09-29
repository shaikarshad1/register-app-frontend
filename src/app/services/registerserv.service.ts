import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class RegisterservService {

  url="http://localhost:8082"
  

  constructor(private httpcliet:HttpClient) { }


  dologin(userName:string,password:string){
    return this.httpcliet.post(this.url+"/login",{userName,password},{responseType:'json'})
  }
 

  getall(){
    return this.httpcliet.get<any>(this.url+"/all",{responseType:'json'})
  }

  getid(userName:string){
    return this.httpcliet.get<any>(this.url+"/get/"+userName) 
  }

  registeruser(user:User){
    return  this.httpcliet.post("http://localhost:8081/add",user)
    
  }

  updateuser(user:any,id:string){
    return this.httpcliet.patch(this.url+"/edi/"+id,user)
  }

  deleteuser(id:string){
    return this.httpcliet.delete(this.url+"/del/"+id)
  }

  dologout(){
    localStorage.removeItem("role")
    localStorage.removeItem("id")
    sessionStorage.removeItem("role")
    sessionStorage.removeItem("id")
  }

  isloggedin(){
    if(localStorage.getItem("id")==null || localStorage.getItem("id")==''){
      console.log(localStorage.getItem("id"))
      return false;
    }
    return true;
  }
}
