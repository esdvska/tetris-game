import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { IntroPageComponent } from './components/intro-page/intro-page.component';
import { GamePageComponent } from './components/game-page/game-page.component';
import { TetrisCoreModule } from 'ngx-tetris';
import { GameHistoryTableComponent } from './components/game-page/game-history/game-history-table/game-history-table.component';
import { SortPipe } from './shared/pipes/sort.pipe';
import { FilterPipe } from './shared/pipes/filter.pipe';
import { AppRoutingModule } from './app-routing.module';
import { UserFormComponent } from './components/intro-page/user-form/user-form.component';
import { GameScoresComponent } from './components/game-page/game-scores/game-scores.component';
import { GameHistoryComponent } from './components/game-page/game-history/game-history.component';
import { GameStatusComponent } from './components/game-page/game-status/game-status.component';
import { GameActionsComponent } from './components/game-page/game-actions/game-actions.component';
import { TetrisApiService } from './api/tetris-api.service';
import { HighScoresComponent } from './components/game-page/high-scores/high-scores.component';
import { HighScoresTableComponent } from './components/game-page/high-scores/high-scores-table/high-scores-table.component';
import { SortScoresPipe } from './shared/pipes/sort-scores.pipe';

@NgModule({
  declarations: [
    AppComponent,
    IntroPageComponent,
    GamePageComponent,
    GameHistoryTableComponent,
    SortPipe,
    FilterPipe,
    UserFormComponent,
    GameScoresComponent,
    GameHistoryComponent,
    GameStatusComponent,
    GameActionsComponent,
    HighScoresComponent,
    HighScoresTableComponent,
    SortScoresPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    TetrisCoreModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [TetrisApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
