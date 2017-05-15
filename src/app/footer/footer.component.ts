import { Component, OnInit } from '@angular/core';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  _data = {};
	errorMsg: string;
	constructor(private _teamService: TeamService) { }

	ngOnInit() {
		this._teamService.getTeams()
			.subscribe(resTeamData => this._data = resTeamData
			, resErrorData => this.errorMsg = resErrorData);
		
	}

}
