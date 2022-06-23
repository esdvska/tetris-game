import { Injectable } from '@angular/core';
import UserInformations from '../shared/models/interfaces/user-info';
@Injectable({
  providedIn: 'root',
})
export class UserInfoService {
  private _userInfo: UserInformations = { name: '', token: 0o0 };

  constructor() {}

  public setUserInfo(user: UserInformations) {
    this._userInfo = { name: user.name, token: user.token };
    localStorage.setItem('userName', this._userInfo.name);
    localStorage.setItem('userToken', this._userInfo.token.toString());
  }

  public getUserInfo() {
    return this._userInfo;
  }

  public getUserToken() {
    return this._userInfo.token;
  }

  public getUserName() {
    return this._userInfo.name;
  }

  public isUserInfoComplited() {
    const nameFromLocal = localStorage.getItem('userName');
    const tokenFromLocal = localStorage.getItem('userToken');
    if (nameFromLocal && tokenFromLocal) {
      this.setUserInfo({
        name: nameFromLocal,
        token: parseInt(tokenFromLocal),
      });
    }
    const regex = /\d{4}$/;
    const testToken = regex.test(this._userInfo.token.toString());
    return this._userInfo.name && testToken ? true : false;
  }

  public clearData() {
    this._userInfo = { name: '', token: 0o0 };
  }
}
