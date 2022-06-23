import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { GameStates } from '../shared/models/enums/game-states';

@Injectable({
  providedIn: 'root',
})
export class GameStatusService {
  private points = new BehaviorSubject<number>(0);
  private gameStatus = new BehaviorSubject<string>(GameStates.Ready);

  public points$ = this.points.asObservable();
  public gameStatus$ = this.gameStatus.asObservable();

  constructor() {}

  public resetPoints() {
    this.points.next(0);
  }

  public changePoints() {
    this.points.next(this.points.getValue() + 1);
  }

  public changeGameStatus(newStatus: string) {
    this.gameStatus.next(newStatus);
    // console.log(this.gameStatus);
  }
}
