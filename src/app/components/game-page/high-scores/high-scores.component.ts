import { Component, OnInit } from '@angular/core';
import { interval, map, tap, switchMap } from 'rxjs';
import { TetrisApiService } from 'src/app/api/tetris-api.service';
import { GetScoresRequest } from 'src/app/shared/models/dto/get-scores-request';
import { BaseComponent } from '../../base.component';

@Component({
  selector: 'app-high-scores',
  templateUrl: './high-scores.component.html',
  styleUrls: ['./high-scores.component.scss'],
})
export class HighScoresComponent extends BaseComponent implements OnInit {
  public highScores!: GetScoresRequest[];
  constructor(private tetrisApiService: TetrisApiService) {
    super();
  }

  ngOnInit(): void {
    this.subscriptions.push(
      //pierwsze odpalenie requestu o high scores
      this.tetrisApiService
        .getScores()
        .pipe(
          map((data) => {
            this.highScores = data
              .sort((a, b) => b.score - a.score)
              .slice(0, 10);
          })
        )
        .subscribe(),

      //interwał z pobieraniem high scores
      interval(30000)
        .pipe(
          switchMap(() =>
            this.tetrisApiService.getScores().pipe(
              map((data) => {
                this.highScores = data
                  .sort((a, b) => b.score - a.score)
                  .slice(0, 10);
              })
            )
          )
        )
        .subscribe()
    );
  }
}
