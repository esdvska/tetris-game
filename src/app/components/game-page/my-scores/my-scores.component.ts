import { Component, OnInit } from '@angular/core';
import { filter, interval, map, mergeMap, tap } from 'rxjs';
import { TetrisApiService } from 'src/app/api/tetris-api.service';
import { UserInfoService } from 'src/app/services/user-info.service';
import { GetScoresRequest } from 'src/app/shared/models/dto/get-scores-request';
import { BaseComponent } from '../../base.component';

@Component({
  selector: 'app-my-scores',
  templateUrl: './my-scores.component.html',
  styleUrls: ['./my-scores.component.scss'],
})
export class MyScoresComponent extends BaseComponent implements OnInit {
  public myScores!: GetScoresRequest[];
  constructor(
    private tetrisApiService: TetrisApiService,
    private userInfoService: UserInfoService
  ) {
    super();
  }

  ngOnInit(): void {
    this.subscriptions.push(
      this.tetrisApiService
        .getScores()
        .pipe(
          map((data) => {
            this.myScores = data.filter(
              (score) => score.name === this.userInfoService.getUserName()
            );
          })
        )
        .subscribe(),
      interval(30000)
        .pipe(
          mergeMap(() =>
            this.tetrisApiService.getScores().pipe(
              map((data) => {
                this.myScores = data.filter(
                  (score) => score.name === this.userInfoService.getUserName()
                );
              })
            )
          )
        )
        .subscribe()
    );
  }
}
