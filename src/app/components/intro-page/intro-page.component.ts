import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-intro-page',
  templateUrl: './intro-page.component.html',
  styleUrls: ['./intro-page.component.scss'],
})
export class IntroPageComponent implements OnInit {
  @Output() isUserValid = new EventEmitter<string>();
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
    if (this.username.length >= 3 && this.mail.includes('@')) {
      this.isUserValid.emit(this.username);
    } else {
      alert(
        `Popraw dane użytkownika. 
        - Nazwa użytkownika powinna zawierać przynajmniej 3 znaki. 
        - Email musi zawierać '@'`
      );
    }
  }
}
