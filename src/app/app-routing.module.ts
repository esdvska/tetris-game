import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { IntroPageComponent } from './components/intro-page/intro-page.component';
import { GamePageComponent } from './components/game-page/game-page.component';
import { PlayerDataGuard } from './shared/guards/player-data.guard';

const routes: Routes = [
  { path: 'intro', component: IntroPageComponent },
  {
    path: 'game/:colors',
    component: GamePageComponent,
    canActivate: [PlayerDataGuard],
  },
  { path: '**', redirectTo: 'intro' },
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
