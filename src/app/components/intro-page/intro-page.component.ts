import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-intro-page',
  templateUrl: './intro-page.component.html',
  styleUrls: ['./intro-page.component.scss'],
})
export class IntroPageComponent implements OnInit {
  @Output() takeValidUserToGamePage = new EventEmitter<string>();

  public username: string = '';

  public mail: string = '';

  public isPersonInfoInvalid: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  public cleanWarning() {
    this.isPersonInfoInvalid = false;
  }

  public onSubmit(form: FormGroup) {
    this.username = form.value.username;
    this.mail = form.value.mail;
    if (this.username.length >= 3 && this.mail.includes('@')) {
      this.takeValidUserToGamePage.emit(this.username);
    } else {
      this.isPersonInfoInvalid = true;
    }
  }
}
