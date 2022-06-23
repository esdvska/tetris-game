import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { UserInfoService } from 'src/app/services/user-info.service';

@Injectable({
  providedIn: 'root',
})
export class PlayerDataGuard implements CanActivate {
  constructor(
    private _userInfoService: UserInfoService,
    private router: Router
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this._userInfoService.isUserInfoComplited()) {
      return true;
    }
    this.router.navigate(['intro']);
    return false;
  }
}
