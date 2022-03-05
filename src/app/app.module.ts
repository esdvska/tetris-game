import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IntroPageComponent } from './components/intro-page/intro-page.component';
import { GamePageComponent } from './components/game-page/game-page.component';
import { FormsModule } from '@angular/forms';
import { TetrisCoreModule } from 'ngx-tetris';
import { GameHistoryTableComponent } from './components/game-page/game-history-table/game-history-table.component';
import { SortPipe } from './shared/model/pipes/sort.pipe';
import { FilterPipe } from './shared/model/pipes/filter.pipe';
import { RouterModule } from '@angular/router';
import { UserFormComponent } from './components/intro-page/user-form/user-form.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroPageComponent,
    GamePageComponent,
    GameHistoryTableComponent,
    SortPipe,
    FilterPipe,
    UserFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    TetrisCoreModule,
    RouterModule.forRoot([
      { path: 'intro', component: IntroPageComponent },
      { path: 'game', component: GamePageComponent },
      { path: '**', redirectTo: 'intro' },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
