import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()
export class TetrisService {
  constructor(private http: HttpClient) {}

  public getScores() {
    const options = {
      headers: new HttpHeaders({
        Accept: 'application/json',
      }),
    };
    return this.http.get(`${environment.gameUrl}tetris`, options);
  }

  public checkToken(token: number) {
    this.http.post(environment.gameUrl, { 'auth-token': token });
  }

  public postScores(data: PostScoresRequest) {
    this.http.post(`${environment.gameUrl}scores`, data);
  }
}
