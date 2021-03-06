import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserInfoService } from 'src/app/services/user-info.service';
import { Validators } from '@angular/forms';
import UserInformations from 'src/app/shared/models/interfaces/user-info';
import { GameModes } from 'src/app/shared/models/enums/game-modes';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent implements OnInit {
  @Output() public submitForm = new EventEmitter<{
    userinfo: UserInformations;
    colors: GameModes;
  }>();

  @Output() setUserInfo = new EventEmitter<UserInformations>();
  public gameModes = GameModes;
  public username!: string;

  public userToken!: number;

  public introForm = new FormGroup({
    name: new FormControl(this.username, [
      Validators.required,
      Validators.minLength(3),
    ]),
    token: new FormControl(this.userToken, [
      Validators.required,
      Validators.maxLength(4),
      Validators.minLength(4),
      Validators.pattern(/^-?(0|[1-9]\d*)?$/),
    ]),
  });

  constructor() {}

  ngOnInit(): void {}

  public onSubmit(mode: GameModes) {
    this.submitForm.emit({
      userinfo: {
        name: this.introForm.controls['name'].value,
        token: this.introForm.controls['token'].value,
      },
      colors: mode,
    });
  }

  public onInputBlur() {
    if (this.introForm.valid) {
      this.setUserInfo.emit({
        name: this.introForm.controls['name'].value,
        token: this.introForm.controls['token'].value,
      });
    }
  }
}
