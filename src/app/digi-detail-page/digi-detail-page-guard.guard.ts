import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DigiDetailPageGuardGuard implements CanActivate {
  constructor(private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
  ): Observable<boolean> | Promise<boolean> | boolean {
    const id = +route.url[1].path;
    console.log(id)
    console.log(JSON.stringify(route.url))
    if (isNaN(id) || id < 1 || id > 1422) {
      console.log("HEY")
      alert('Invalid digi id');
      this.router.navigate(['/digiError']);
      return false;
    }
    return true;
  }

}