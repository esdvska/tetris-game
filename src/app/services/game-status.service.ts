import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { GameStates } from '../shared/models/enums/game-states';

@Injectable({
  providedIn: 'root',
})
export class GameStatusService {
  private points = new BehaviorSubject<number>(0);
  private gameStatus = new BehaviorSubject<string>(GameStates.Ready);

  public points$ = this.points.asObservable();
  public gameStatus$ = this.gameStatus.asObservable();

  public pointsValue = this.points.value;
  constructor() {}

  public resetPoints() {
    this.points.next(0);
  }

  public changePoints() {
    // let currentpoints = this.points.value;
    this.points.next(this.pointsValue + 1);
  }

  public changeGameStatus(newStatus: string) {
    this.gameStatus.next(newStatus);
    // console.log(this.gameStatus);
  }
}
