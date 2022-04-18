import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-game-actions',
  templateUrl: './game-actions.component.html',
  styleUrls: ['./game-actions.component.scss'],
})
export class GameActionsComponent implements OnInit {
  @Input() public gameStates!: string[];
  @Input() set gameStatus(value: string) {
    this.gameStatusFromInput = value;
  }
  @Input() public seconds: any;
  @Output() public lineCleared = new EventEmitter();
  @Output() public pushLineClearedToHistory = new EventEmitter();
  @Output() public gameStateChange = new EventEmitter();
  @Output() public endGame = new EventEmitter();
  public gameStatusFromInput!: string;
  constructor() {}

  ngOnInit(): void {
    console.log(this.gameStates);
  }
}
