import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TetrisService {
  private tetrisUrl = 'http://scores.chrum.it/tetris';
  constructor(private http: HttpClient) {}

  public getScores() {
    return this.http.get(this.tetrisUrl);
  }
}
