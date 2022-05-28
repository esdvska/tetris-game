import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import PostScoresRequest from '../shared/models/interfaces/post-scores-request';
import { CheckTokenResponse } from '../shared/models/interfaces/check-token-response';
import { GetScoresRequest } from '../shared/models/dto/get-scores-request';
import { UserInfoService } from '../services/user-info.service';

@Injectable()
export class TetrisApiService {
  constructor(
    private http: HttpClient,
    private userInfoService: UserInfoService
  ) {}
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
    // let options = {
    //   headers: new HttpHeaders({
    //     'auth-token': this.userInfoService.getUserInfo().token.toString(),
    //   }),
    // };
    const headers = new HttpHeaders({
      'auth-token': this.userInfoService.getUserToken().toString(),
      Accept: 'application/json',
      'Content-Type': 'application/json',
    });
    const options = { headers };
    return this.http.post(
      `${environment.gameUrl}scores`,
      {
        ...data,
        game: 'tetris',
      },
      options
    );
  }
}
