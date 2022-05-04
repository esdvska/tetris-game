import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { TetrisApiService } from 'src/app/api/tetris-api.service';

@Component({
  selector: 'app-high-scores',
  templateUrl: './high-scores.component.html',
  styleUrls: ['./high-scores.component.scss'],
})
export class HighScoresComponent implements OnInit {
  public highScores: any;
  constructor(private tetrisApiService: TetrisApiService) {}

  ngOnInit(): void {
    this.tetrisApiService
      .getScores()
      .pipe(tap((data) => console.log(data)))
      .subscribe();
  }
}
