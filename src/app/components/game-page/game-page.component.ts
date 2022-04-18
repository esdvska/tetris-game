import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
} from '@angular/core';
import * as moment from 'moment';
import { UserInfoService } from 'src/app/services/user-info.service';
import { Location } from '@angular/common';

import GameHistory from 'src/app/shared/models/game-history';
import UserInformations from 'src/app/shared/models/user-info';
import { TetrisApiService } from 'src/app/api/tetris-api.service';
import { take, tap } from 'rxjs/operators';
import { GameStatusService } from 'src/app/services/game-status.service';

enum GameStates {
  Start = 'Started',
  Stop = 'Stopped',
  Reset = 'Reset',
  Clear = 'Cleared',
  AllActions = 'All',
  Ready = 'Ready',
}

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.scss'],
})
export class GamePageComponent implements OnInit {
  @ViewChild('actionsBtnGroup') actionsBtnGroup: ElementRef | undefined;

  public userInfo: UserInformations = { name: '', token: 0o0 };

  @Output() public return = new EventEmitter();

  public gameHistory: GameHistory[] = [];

  public gameStates = Object.values(GameStates);

  public gameStatus = GameStates.Ready;

  public points: number = 0;

  public seconds: number = 0;

  public isEndGameModalVisible: boolean = false;

  public selectedAction = GameStates.AllActions;

  constructor(
    private _userService: UserInfoService,
    private _location: Location,
    private _tetrisService: TetrisApiService,
    private _gameStatusService: GameStatusService
  ) {}

  ngOnInit(): void {
    this.userInfo = this._userService.getUserInfo();
    setInterval(() => {
      if (this.gameStatus === GameStates.Start) {
        ++this.seconds;
      }
    }, 1000);
  }

  public onReturnToHomePage() {
    this._location.back();
  }

  public onGameStateChange(gameState: GameStates) {
    this.gameHistory.push({
      timestamp: moment(new Date()),
      actionType: gameState,
    });

    if (gameState === GameStates.Reset) {
      this._tetrisService
        .postScores({
          name: this.userInfo.name,
          score: this.points,
        })
        .pipe(
          tap((data) => console.log(data)),
          take(1)
        )
        .subscribe();
      if (
        this.gameStatus === GameStates.Start ||
        this.gameStatus === GameStates.Reset
      ) {
        this.gameStatus = GameStates.Start;
      } else {
        this.gameStatus = GameStates.Ready;
        this._gameStatusService.resetPoints();
      }
    } else {
      this.gameStatus = gameState;
    }
  }

  public onGameEnd() {
    console.log('henlo');
    // this._tetrisService
    //   .postScores({
    //     name: this.userInfo.name,
    //     score: this.points,
    //   })
    //   .pipe(
    //     tap((data) => console.log(data)),
    //     take(1)
    //   )
    //   .subscribe();
  }

  pushLineClearedToHistory() {
    this.gameHistory.push({
      timestamp: moment(),
      actionType: GameStates.Clear,
    });
  }

  public onLineCleared() {
    ++this.points;
  }
}
