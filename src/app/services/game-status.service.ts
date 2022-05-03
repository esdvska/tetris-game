import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { GameStates } from '../shared/models/enums/game-states';

@Injectable({
  providedIn: 'root',
})
export class GameStatusService {
  private points = new BehaviorSubject<number>(0);
  private gameStatus = new BehaviorSubject<GameStates>(GameStates.Ready);

  public points$ = this.points.asObservable();
  public gameStatus$ = this.gameStatus.asObservable();
  constructor() {}

  public resetPoints() {
    this.points.next(0);
  }

  public changeGameStatus(newStatus: GameStates) {
    this.gameStatus.next(newStatus);
    // console.log(this.gameStatus);
  }
}
