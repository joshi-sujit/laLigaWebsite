import { Component, ElementRef, OnInit } from '@angular/core';
import { TeamService } from '../team.service';

import { Subject } from 'rxjs/Rx';
@Component({
	selector: 'app-team-list',
	templateUrl: './team-list.component.html',
	styleUrls: ['./team-list.component.css']
})
export class TeamListComponent implements OnInit {
	record = {};
	errorMsg: string;

	dtTrigger: Subject<any> = new Subject();
	constructor(private _teamService: TeamService) {
	}

	ngOnInit() {
		
		this._teamService.getLeagueTable()
			.subscribe(resTeamData => {this.record = resTeamData; this.dtTrigger.next();}
			, resErrorData => this.errorMsg = resErrorData);

	}







}
