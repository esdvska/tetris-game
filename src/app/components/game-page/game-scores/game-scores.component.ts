import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-scores',
  templateUrl: './game-scores.component.html',
  styleUrls: ['./game-scores.component.scss'],
})
export class GameScoresComponent implements OnInit {
  public pointsFromInput!: number;
  @Input() set points(value: number) {
    this.pointsFromInput = value;
  }
  constructor() {}

  ngOnInit(): void {}
}
