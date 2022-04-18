import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import PostScoresRequest from '../shared/models/post-scores-request';
import { CheckTokenResponse } from '../shared/models/check-token-response';

@Injectable()
export class TetrisApiService {
  constructor(private http: HttpClient) {}
  private options = {
    headers: new HttpHeaders({
      Accept: 'application/json',
    }),
  };
  public getScores() {
    return this.http.get(`${environment.gameUrl}tetris`, this.options);
  }

  public checkToken(token: number) {
    return this.http.post<CheckTokenResponse>(
      `${environment.gameUrl}check-token`,
      {
        'auth-token': token,
      },
      this.options
    );
  }

  public postScores(data: PostScoresRequest) {
    return this.http.post(`${environment.gameUrl}scores`, {
      ...data,
      game: 'tetris',
    });
  }
}
