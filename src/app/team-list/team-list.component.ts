import { Component, OnInit } from '@angular/core';
import { Team } from './team.model';
import { TeamService } from '../team.service';


@Component({
	selector: 'app-team-list',
	templateUrl: './team-list.component.html',
	styleUrls: ['./team-list.component.css']
})
export class TeamListComponent implements OnInit {
	record = {};
	errorMsg: string;
	constructor(private _teamService: TeamService) { }

	ngOnInit() {
		this._teamService.getLeagueTable()
			.subscribe(resTeamData => this.record = resTeamData
			, resErrorData => this.errorMsg = resErrorData);
		
	}

	

}
