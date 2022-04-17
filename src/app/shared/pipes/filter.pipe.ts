import { Pipe, PipeTransform } from '@angular/core';
import GameHistory from '../models/game-history';

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
