import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
} from '@angular/core';

import * as moment from 'moment';
import { Location } from '@angular/common';
import { take, tap } from 'rxjs/operators';

import GameHistory from 'src/app/shared/models/interfaces/game-history';
import UserInformations from 'src/app/shared/models/interfaces/user-info';
import { TetrisApiService } from 'src/app/api/tetris-api.service';
import { GameStatusService } from 'src/app/services/game-status.service';
import { UserInfoService } from 'src/app/services/user-info.service';
import { GameStates } from 'src/app/shared/models/enums/game-states';
import { interval, Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { BaseComponent } from '../base.component';
import { GameModes } from 'src/app/shared/models/enums/game-modes';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.scss'],
})
export class GamePageComponent extends BaseComponent implements OnInit {
  @ViewChild('actionsBtnGroup') actionsBtnGroup: ElementRef | undefined;

  @Output() public return = new EventEmitter();

  public userInfo: UserInformations = { name: '', token: 0o0 };

  public gameHistory: GameHistory[] = [];

  public gameStatus!: string;

  public points!: number;

  public seconds: number = 0;

  public isEndGameModalVisible = false;

  public selectedAction = GameStates.AllActions;

  public color!: GameModes;

  constructor(
    private _userService: UserInfoService,
    private _location: Location,
    private _tetrisService: TetrisApiService,
    private _gameStatusService: GameStatusService,
    private _route: ActivatedRoute
  ) {
    super();
    this.color = this._route.snapshot.params['colors'];
  }

  ngOnInit(): void {
    this.subscriptions.push(
      this._gameStatusService.gameStatus$.subscribe(
        (data) => (this.gameStatus = data)
      ),
      this._gameStatusService.points$.subscribe((data) => (this.points = data))
    );
    this.userInfo = this._userService.getUserInfo();

    setInterval(() => {
      if (this.gameStatus === GameStates.Start) {
        ++this.seconds;
      }
    }, 1000);
  }

  public onReturnToHomePage() {
    this._userService.clearData();
    this._location.back();
  }

  public onGameStateChange(gameState: GameStates) {
    this.gameHistory.push({
      timestamp: moment(new Date()),
      actionType: gameState,
    });

    if (gameState === GameStates.Reset) {
      if (this.points) {
        this._tetrisService
          .postScores({
            name: this.userInfo.name,
            score: this.points,
          })
          .pipe(take(1))
          .subscribe();
      }
      if (
        this.gameStatus === GameStates.Start ||
        this.gameStatus === GameStates.Reset
      ) {
        this._gameStatusService.changeGameStatus(GameStates.Start);
      } else {
        this._gameStatusService.changeGameStatus(GameStates.Ready);
        this._gameStatusService.resetPoints();
      }
    } else {
      this._gameStatusService.changeGameStatus(gameState);
    }
  }

  pushLineClearedToHistory() {
    this.gameHistory.push({
      timestamp: moment(),
      actionType: GameStates.Clear,
    });
  }

  public onLineCleared() {
    this._gameStatusService.changePoints();
    this.pushLineClearedToHistory();
  }
}
