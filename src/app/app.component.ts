import { Component } from '@angular/core';
import { TeamService } from './team.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
	providers: [TeamService]
})
export class AppComponent {
	_data = {};
	_upcomingFixtureData = {};
	errorMsg: string;
	constructor(private _teamService: TeamService) { }

	ngOnInit() {
		this._teamService.getTeams()
			.subscribe(resTeamData => this._data = resTeamData
			, resErrorData => this.errorMsg = resErrorData);

	}
 
}
