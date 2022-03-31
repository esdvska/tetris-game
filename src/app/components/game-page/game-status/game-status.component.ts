import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-status',
  templateUrl: './game-status.component.html',
  styleUrls: ['./game-status.component.scss'],
})
export class GameStatusComponent implements OnInit {
  @Input() gameStatus: any;
  @Input() seconds: any;

  constructor() {}

  ngOnInit(): void {}
}
