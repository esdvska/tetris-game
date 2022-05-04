import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-scores',
  templateUrl: './game-scores.component.html',
  styleUrls: ['./game-scores.component.scss'],
})
export class GameScoresComponent implements OnInit {
  @Input() public points: number | null = 0;
  constructor() {}

  ngOnInit(): void {}
}
