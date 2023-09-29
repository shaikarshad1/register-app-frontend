import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RoleGuardGuard implements CanActivate {
  userNameDisplay!:string | null;
  
  constructor(){}
  
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.isAuthrized(route);
  }
  

  isAuthrized(route: ActivatedRouteSnapshot):boolean{
    
    
    return  true;
  }
}
