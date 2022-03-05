import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserInfoService {
  private _userName: string = '';
  constructor() {}

  public setUserName(name: string) {
    this._userName = name;
  }

  public getUserName() {
    return this._userName;
  }
}
