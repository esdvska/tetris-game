import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import PostScoresRequest from '../shared/models/interfaces/post-scores-request';
import { CheckTokenResponse } from '../shared/models/interfaces/check-token-response';
import { GetScoresRequest } from '../shared/models/dto/get-scores-request';

@Injectable()
export class TetrisApiService {
  constructor(private http: HttpClient) {}
  private options = {
    headers: new HttpHeaders({
      Accept: 'application/json',
    }),
  };
  public getScores() {
    return this.http.get<GetScoresRequest[]>(
      `${environment.gameUrl}tetris`,
      this.options
    );
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
