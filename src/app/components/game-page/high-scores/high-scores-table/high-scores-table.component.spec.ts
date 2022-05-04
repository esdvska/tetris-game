import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighScoresTableComponent } from './high-scores-table.component';

describe('HighScoresTableComponent', () => {
  let component: HighScoresTableComponent;
  let fixture: ComponentFixture<HighScoresTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HighScoresTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HighScoresTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
