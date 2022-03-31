import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserInfoService } from 'src/app/services/user-info.service';
import { Validators } from '@angular/forms';

interface UserInfo {
  name: string;
  mail: string;
}
@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent implements OnInit {
  @Output() public submitForm = new EventEmitter<string>();
  public username: string = '';

  public mail: string = '';

  public isPersonInfoInvalid: boolean = false;

  public introForm = this._fb.group({
    username: ['', Validators.required],
    token: [null, Validators.required],
  });

  constructor(
    private _userService: UserInfoService,
    private _router: Router,
    private _fb: FormBuilder
  ) {}

  ngOnInit(): void {}

  public cleanWarning() {
    this.isPersonInfoInvalid = false;
  }

  public onSubmit(form: FormGroup) {
    console.log(form.value.username);
    // this.submitForm.emit(form.value.username);

    // this._userService.setUserName(this.username);
    // this._router.navigate(['/game']);
  }
}
