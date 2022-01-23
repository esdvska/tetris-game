import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-intro-page',
  templateUrl: './intro-page.component.html',
  styleUrls: ['./intro-page.component.scss'],
})
export class IntroPageComponent implements OnInit {
  @Output() isUserValid = new EventEmitter<boolean>();
  public username: string = '';
  public mail: string = '';
  public isDisabled = true;
  constructor() {}

  ngOnInit(): void {}
  public onChange() {
    if (this.username && this.mail) {
      this.isDisabled = false;
      console.log(this.isDisabled);
    }
  }
  public startGame() {
    if (this.mail.includes('@')) {
      this.isUserValid.emit(true);
    } else {
      alert(`Popraw dane użytkownika. Email musi zawierać '@'`);
    }
  }
}
