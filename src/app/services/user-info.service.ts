import { Injectable } from '@angular/core';
import UserInformations from '../shared/models/user-info';
@Injectable({
  providedIn: 'root',
})
export class UserInfoService {
  private _userInfo: UserInformations = { name: '', token: 0o0 };
  constructor() {}

  public setUserInfo(user: UserInformations) {
    this._userInfo = { name: user.name, token: user.token };
  }

  public getUserInfo() {
    return this._userInfo;
  }
}