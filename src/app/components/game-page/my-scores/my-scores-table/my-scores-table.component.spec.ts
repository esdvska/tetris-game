import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyScoresTableComponent } from './my-scores-table.component';

describe('MyScoresTableComponent', () => {
  let component: MyScoresTableComponent;
  let fixture: ComponentFixture<MyScoresTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyScoresTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyScoresTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
