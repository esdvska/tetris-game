import { Component, Input, OnInit } from '@angular/core';
import { GetScoresRequest } from 'src/app/shared/models/dto/get-scores-request';

@Component({
  selector: 'app-high-scores-table',
  templateUrl: './high-scores-table.component.html',
  styleUrls: ['./high-scores-table.component.scss'],
})
export class HighScoresTableComponent implements OnInit {
  @Input() highScores: GetScoresRequest[] = [];
  public dir = 'asc';

  constructor() {}

  ngOnInit(): void {}
}
