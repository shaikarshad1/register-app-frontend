import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { RegisterservService } from 'src/app/services/registerserv.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  user=new User();
  toggleedit=false

  constructor(private regsev:RegisterservService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.regsev.getid(this.route.snapshot.params['id']).subscribe(
      data=>{this.user=data,
        console.log(this.user.userName),
        console.log(localStorage.getItem("id"))
        if(localStorage.getItem("id")==this.user.userName){
          this.toggleedit=true
        }
      },
      error=>console.log(error)
    )
    
    
  }

  singleedit(id:string){
    this.router.navigate(['/update',id])
  }

}
