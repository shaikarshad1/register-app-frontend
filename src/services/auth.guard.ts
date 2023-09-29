import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { RegisterservService } from 'src/app/services/registerserv.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private regserv:RegisterservService, private router:Router){

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      //if user is logged in then only allow to access dashboard
      if(this.regserv.isloggedin()){
        console.log("in can activate")
        return true;
      }this.regserv.dologout();
      this.router.navigate([''])
    return false;
  }
  
}
