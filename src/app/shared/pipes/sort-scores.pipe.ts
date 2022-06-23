import { Pipe, PipeTransform } from '@angular/core';
import { GetScoresRequest } from '../models/dto/get-scores-request';

@Pipe({
  name: 'sortScores',
})
export class SortScoresPipe implements PipeTransform {
  transform(value: GetScoresRequest[], dir: string): GetScoresRequest[] {
    if (value) {
      if (dir === 'desc') {
        return value.sort((a, b) => (b.score > a.score ? 1 : -1));
      }
      return value.sort((a, b) => (a.score > b.score ? 1 : -1));
    } else return [];
  }
}
