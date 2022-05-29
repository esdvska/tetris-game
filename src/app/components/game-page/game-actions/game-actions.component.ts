import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { TetrisCoreComponent } from 'ngx-tetris';
import { GameStates } from 'src/app/shared/models/enums/game-states';

@Component({
  providers: [TetrisCoreComponent],
  selector: 'app-game-actions',
  templateUrl: './game-actions.component.html',
  styleUrls: ['./game-actions.component.scss'],
})
export class GameActionsComponent implements OnInit {
  public myScoresVisible = true;
  @Input() set gameStatus(value: string) {
    this.gameStatusFromInput = value;
  }
  @Input() public seconds: any;
  @Output() public lineCleared = new EventEmitter();
  @Output() public pushLineClearedToHistory = new EventEmitter();
  @Output() public gameStateChange = new EventEmitter();
  @Output() public endGame = new EventEmitter();
  public gameStatusFromInput!: string;
  constructor(private gameComponent: TetrisCoreComponent) {}

  ngOnInit(): void {}

  public onStartGame() {
    this.gameComponent.actionStart();
    this.gameStateChange.emit(GameStates.Start);
  }

  public onStopGame() {
    this.gameComponent.actionStop();
    this.gameStateChange.emit(GameStates.Stop);
  }

  public onResetGame() {
    this.gameComponent.actionReset();
    this.gameStateChange.emit(GameStates.Reset);
    this.endGame.emit();
  }

  public onLineCleared() {
    this.lineCleared.emit();
    this.pushLineClearedToHistory.emit();
  }
}
