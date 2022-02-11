import { Component, Input, OnInit } from '@angular/core';
import GameHistory from 'src/app/shared/model/gameHistory';

@Component({
  selector: 'app-game-history-table',
  templateUrl: './game-history-table.component.html',
  styleUrls: ['./game-history-table.component.scss'],
})
export class GameHistoryTableComponent implements OnInit {
  @Input() public history: GameHistory[] = [];
  constructor() {}

  ngOnInit(): void {}
}
