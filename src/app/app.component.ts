import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'tetris';

  public isUserValid: boolean = false;

  public username: string = '';

  constructor() {}

  public onTakeValidUSerToGamePage(username: string) {
    this.isUserValid = true;
    this.username = username;
  }

  public onReturn() {
    this.isUserValid = false;
  }
}
