import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-game-actions',
  templateUrl: './game-actions.component.html',
  styleUrls: ['./game-actions.component.scss'],
})
export class GameActionsComponent implements OnInit {
  @Input() public gameStates: any;
  @Input() public gameStatus: any;
  @Input() public seconds: any;
  @Output() public lineCleared = new EventEmitter();
  @Output() public pushLineClearedToHistory = new EventEmitter();
  @Output() public gameStateChange = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
