import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import {NgPipesModule} from 'ngx-pipes';
import { DataTablesModule } from 'angular-datatables';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselComponent } from './carousel/carousel.component';
import { TeamListComponent } from './team-list/team-list.component';
import { TeamDetailComponent } from './team-list/team-detail/team-detail.component';
import { GameListComponent } from './game-list/game-list.component';
import { MatchHighlightComponent } from './match-highlight/match-highlight.component';
import { HomeComponent } from './home/home.component';
import { SplitPipe } from './split.pipe';
import { ReversePipe } from './reverse.pipe';
import { GameComponent } from './team-list/game/game.component';
import { FGameComponent } from './team-list/f-game/f-game.component';
import { FixtureComponent } from './fixture/fixture.component';
import { ResultComponent } from './result/result.component';

const appRoutes: Routes =[
  { path: '', component: HomeComponent},
  { path: 'team/:id', component: TeamDetailComponent},
  { path: 'fixture', component: FixtureComponent},
  { path: 'result', component: ResultComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    FooterComponent,
    CarouselComponent,
    TeamListComponent,
    TeamDetailComponent,
    GameListComponent,
    MatchHighlightComponent,
    SplitPipe,
    ReversePipe,
    GameComponent,
    FGameComponent,
    FixtureComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgPipesModule,
    DataTablesModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
