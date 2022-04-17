import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserInfoService } from 'src/app/services/user-info.service';
import UserInformations from 'src/app/shared/models/user-info';

@Component({
  selector: 'app-intro-page',
  templateUrl: './intro-page.component.html',
  styleUrls: ['./intro-page.component.scss'],
})
export class IntroPageComponent {
  constructor(private _userService: UserInfoService, private _router: Router) {}

  public onSubmitForm(userinfo: UserInformations) {
    this._userService.setUserInfo(userinfo);
    this._router.navigate(['/game']);
  }
}
