import { Pipe, PipeTransform } from '@angular/core';
import { Action } from 'rxjs/internal/scheduler/Action';
import GameHistory from '../gameHistory';
import { orderBy } from 'lodash';

@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {
  transform(items: GameHistory[], dir: string): GameHistory[] {
    if (dir === 'desc') {
      return items.sort((a, b) =>
        b.timestamp.valueOf() > a.timestamp.valueOf() ? 1 : -1
      );
    }
    return items.sort((a, b) =>
      a.timestamp.valueOf() > b.timestamp.valueOf() ? 1 : -1
    );
  }
}
