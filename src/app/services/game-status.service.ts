import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GameStatusService {
  public points: number = 0;
  constructor() {}
  public resetPoints() {
    this.points = 0;
    console.log(this.points);
  }
}
