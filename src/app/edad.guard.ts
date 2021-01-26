import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EdadGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    const edad = 18; //edad tiene que ser mayor a 18 


    if (edad >= 18) {
      return true;
    }
    return false;
  }
  
}