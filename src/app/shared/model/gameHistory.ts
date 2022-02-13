import { Moment } from 'moment';

export default interface GameHistory {
  timestamp: Moment;
  actionType: string;
}
