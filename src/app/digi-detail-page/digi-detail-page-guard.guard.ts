import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DigiDetailPageGuardGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    const id = +route.url[1].path;
    console.log(JSON.stringify(route.url))
    if (isNaN(id) || id < 1 || id > 1422) {
      // alert('Invalid digi id');
      this.router.navigate(['/digiError']);
      return false;
    }
    return true;
  }
  
}
