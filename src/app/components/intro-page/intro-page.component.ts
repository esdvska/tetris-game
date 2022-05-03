import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { take, tap } from 'rxjs/operators';
import { TetrisApiService } from 'src/app/api/tetris-api.service';
import { UserInfoService } from 'src/app/services/user-info.service';
import UserInformations from 'src/app/shared/models/interfaces/user-info';

@Component({
  selector: 'app-intro-page',
  templateUrl: './intro-page.component.html',
  styleUrls: ['./intro-page.component.scss'],
})
export class IntroPageComponent {
  constructor(
    private _userService: UserInfoService,
    private _router: Router,
    private _tetrisApi: TetrisApiService
  ) {}

  public onSubmitForm(userinfo: UserInformations) {
    this._tetrisApi
      .checkToken(userinfo.token)
      .pipe(
        tap((data) => {
          if (data.success) {
            this._userService.setUserInfo(userinfo);
            this._router.navigate(['/game']);
          } else {
            alert('Wrong Token');
          }
        }),
        take(1)
      )
      .subscribe();
  }
}
