import { Component, Input, OnInit } from '@angular/core';
import { GetScoresRequest } from 'src/app/shared/models/dto/get-scores-request';

@Component({
  selector: 'app-my-scores-table',
  templateUrl: './my-scores-table.component.html',
  styleUrls: ['./my-scores-table.component.scss'],
})
export class MyScoresTableComponent implements OnInit {
  @Input() myScores: GetScoresRequest[] = [];
  public dir = 'asc';

  constructor() {}

  ngOnInit(): void {}
}
