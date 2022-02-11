import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameHistoryTableComponent } from './game-history-table.component';

describe('GameHistoryTableComponent', () => {
  let component: GameHistoryTableComponent;
  let fixture: ComponentFixture<GameHistoryTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameHistoryTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameHistoryTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
