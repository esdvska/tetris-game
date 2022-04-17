import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserInfoService } from 'src/app/services/user-info.service';
import { Validators } from '@angular/forms';
import UserInformations from 'src/app/shared/models/user-info';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent implements OnInit {
  @Output() public submitForm = new EventEmitter<UserInformations>();

  public username: string = '';

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

  constructor(
    private _userService: UserInfoService,
    private _router: Router,
    private _fb: FormBuilder
  ) {}

  ngOnInit(): void {}

  public onSubmit() {
    this.submitForm.emit({
      name: this.introForm.controls['name'].value,
      token: this.introForm.controls['token'].value,
    });
  }
}
