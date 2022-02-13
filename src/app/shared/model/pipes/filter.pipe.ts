import { Pipe, PipeTransform } from '@angular/core';
import GameHistory from '../gameHistory';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(gameHistory: GameHistory[], actionType: string): GameHistory[] {
    if (actionType === 'All') {
      return gameHistory;
    }
    const filteredList: GameHistory[] = [];

    gameHistory.forEach((history) => {
      if (history.actionType === actionType) {
        filteredList.push(history);
      }
    });

    return filteredList;
  }
}
