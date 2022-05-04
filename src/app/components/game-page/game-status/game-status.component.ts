import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GameStatusService } from 'src/app/services/game-status.service';
import { GameStates } from 'src/app/shared/models/enums/game-states';

@Component({
  selector: 'app-game-status',
  templateUrl: './game-status.component.html',
  styleUrls: ['./game-status.component.scss'],
})
export class GameStatusComponent implements OnInit {
  public gameStatus$!: Observable<string>;

  @Input() seconds: any;

  constructor(private _gameStatusService: GameStatusService) {}

  ngOnInit(): void {
    this.gameStatus$ = this._gameStatusService.gameStatus$;
  }
}
