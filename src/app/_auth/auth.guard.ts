import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { UserAuthService } from 'app/_services/user-auth.service';
import { UserServiceService } from 'app/_services/user-service.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private userAuthService: UserAuthService,
    private router: Router,
    private userService: UserServiceService) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.userAuthService.getToken() !== null) {
      const role = route.data["roles"] as Array<string>;
      if (role) {
        const match = this.userService.roleMatch(role);
        if (match) {
          return true;
        } else {
          localStorage.clear();
          this.router.navigate(['/login']);
          return false;
        }
      }
    }
    this.router.navigate(['/login']);
    return false;
  }


}
