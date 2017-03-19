import { AuthenticationService } from './authentication.service';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate{

  constructor(private authService: AuthenticationService) { }

  canActivate(route:ActivatedRouteSnapshot, stage:RouterStateSnapshot):Observable<boolean> | boolean{
    return this.authService.isUserAuthenticated().first();
  }

}
