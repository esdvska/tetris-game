import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
} from '@angular/core';

import GameHistory from 'src/app/shared/model/gameHistory';

enum GameStates {
  Start = 'Started',
  Stop = 'Stopped',
  Reset = 'Reset',
  Ready = 'Ready',
}

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.scss'],
})
export class GamePageComponent implements OnInit {
  @ViewChild('actionsBtnGroup') actionsBtnGroup: ElementRef | undefined;

  @Input() public username: string = '';

  @Output() public return = new EventEmitter();

  public gameHistory: GameHistory[] = [];

  public gameStates = GameStates;

  public gameStatus: GameStates = this.gameStates.Ready;

  public points: number = 0;

  public seconds: number = 0;

  public isEndGameModalVisible: boolean = false;

  constructor() {}

  ngOnInit(): void {
    setInterval(() => {
      if (this.gameStatus === this.gameStates.Start) {
        ++this.seconds;
      }
    }, 1000);
  }

  public onReturnToHomePage() {
    this.return.emit();
  }

  public onGameStateChange(gameState: GameStates) {
    this.gameHistory.push({ timestamp: new Date(), actionType: gameState });
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
      timestamp: new Date(),
      actionType: 'Line Cleared',
    });
  }

  public onLineCleared() {
    ++this.points;
  }
}
