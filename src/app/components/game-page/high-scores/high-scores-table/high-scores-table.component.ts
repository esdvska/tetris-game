import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-high-scores-table',
  templateUrl: './high-scores-table.component.html',
  styleUrls: ['./high-scores-table.component.scss'],
})
export class HighScoresTableComponent implements OnInit {
  @Input() highScores: any;
  constructor() {}

  ngOnInit(): void {}
}
