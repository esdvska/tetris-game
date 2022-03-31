import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-actions',
  templateUrl: './game-actions.component.html',
  styleUrls: ['./game-actions.component.scss'],
})
export class GameActionsComponent implements OnInit {
  @Output() public onLineCleared = new EventEmitter<any>();
  constructor() {}

  ngOnInit(): void {}
}
