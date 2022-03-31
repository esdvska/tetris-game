import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-history',
  templateUrl: './game-history.component.html',
  styleUrls: ['./game-history.component.scss'],
})
export class GameHistoryComponent implements OnInit {
  @Input() selectedAction = '';

  @Input() public gameStates: any;

  @Input() public gameHistory: any;
  constructor() {}

  ngOnInit(): void {}
}
