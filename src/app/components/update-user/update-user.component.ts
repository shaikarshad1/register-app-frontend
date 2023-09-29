import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { RegisterservService } from 'src/app/services/registerserv.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  user =new User()

  tooglebutton=false

  constructor(private regsev:RegisterservService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {

    if(localStorage.getItem("role")=='admin'){
      console.log(localStorage.getItem("role"))
      this.tooglebutton=true
    }
    this.regsev.getid(this.route.snapshot.params['id']).subscribe(
      data=>this.user=data,
      error=>console.log(error)
    )
  }

  doupdate(){
    this.regsev.updateuser(this.user,this.route.snapshot.params['id']).subscribe(
      data=>this.router.navigate(['/allusers']),
      error=>console.log(error)
    )
  }

}
