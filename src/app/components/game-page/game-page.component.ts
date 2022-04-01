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

import GameHistory from 'src/app/shared/model/gameHistory';
import UserInformations from 'src/app/shared/model/userInfo';
import { TetrisService } from 'src/app/api/tetris-api.service';

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
    private _tetrisService: TetrisService
  ) {}

  ngOnInit(): void {
    this.userInfo = this._userService.getUserInfo();
    this._tetrisService.getScores().subscribe((data) => console.log(data));
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
      if (
        this.gameStatus === GameStates.Start ||
        this.gameStatus === GameStates.Reset
      ) {
        this.gameStatus = GameStates.Start;
      } else {
        this.gameStatus = GameStates.Ready;
        this.points = 0;
      }
    } else {
      this.gameStatus = gameState;
    }
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
