import { Component, OnInit } from '@angular/core';
import { TeamService } from '../team.service';
import { GameListComponent } from '../game-list/game-list.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  
})
export class HomeComponent implements OnInit {

  _data = {}; 
	_upcomingFixtureData = {};
  _recentResultData = {};
	errorMsg: string;
	constructor(private _teamService: TeamService) { }

	ngOnInit() {
		this._teamService.getTeams()
			.subscribe(resTeamData => this._data = resTeamData
			, resErrorData => this.errorMsg = resErrorData);
		
		this._teamService.getUpcomingFixture()
			.subscribe(fixData => this._upcomingFixtureData = fixData
			, resErrorData => this.errorMsg = resErrorData);

    this._teamService.getRecentResults()
			.subscribe(resultData => this._recentResultData = resultData
			, resErrorData => this.errorMsg = resErrorData);
	}

}
