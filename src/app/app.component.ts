import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'tetris';
  public isUserValid: boolean = false;
  constructor() {}
  public onUserValidation(isUserValid: boolean) {
    this.isUserValid = isUserValid;
  }
}
