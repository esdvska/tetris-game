import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.scss'],
})
export class GamePageComponent implements OnInit {
  @Input() public username: string = '';
  @Output() public return = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  public onReturnToHomePage() {
    this.return.emit();
  }
}
