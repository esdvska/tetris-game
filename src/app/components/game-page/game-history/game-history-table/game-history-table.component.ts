import { Component, Input, OnInit } from '@angular/core';
import GameHistory from 'src/app/shared/models/interfaces/game-history';

@Component({
  selector: 'app-game-history-table',
  templateUrl: './game-history-table.component.html',
  styleUrls: ['./game-history-table.component.scss'],
})
export class GameHistoryTableComponent implements OnInit {
  @Input() public history: GameHistory[] = [];

  @Input() public selectedAction: string = 'All';

  public dir = 'asc';

  constructor() {}

  ngOnInit(): void {}
}
