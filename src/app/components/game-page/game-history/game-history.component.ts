import { Component, Input, OnInit } from '@angular/core';
import { GameStates } from 'src/app/shared/models/enums/game-states';

@Component({
  selector: 'app-game-history',
  templateUrl: './game-history.component.html',
  styleUrls: ['./game-history.component.scss'],
})
export class GameHistoryComponent implements OnInit {
  @Input() selectedAction = '';

  @Input() public gameHistory: any;
  public gameStates = Object.values(GameStates);

  constructor() {}

  ngOnInit(): void {}
}
