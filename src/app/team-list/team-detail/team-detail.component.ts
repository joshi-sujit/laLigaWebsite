import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { TeamService } from '../../team.service';
import { Subscription } from 'rxjs/Subscription';
import { Subject } from 'rxjs/Rx';
import { ReversePipe } from 'ngx-pipes/src/app/pipes/array/reverse';
import { DataTableDirective } from 'angular-datatables';

@Component({
	selector: 'app-team-detail',
	templateUrl: './team-detail.component.html',
	styleUrls: ['./team-detail.component.css'],
})

export class TeamDetailComponent implements OnInit, OnDestroy {
	teamId: string;
	x = {};
	record = {};
	fixtureData;
	squadList = {};
	public data;
	paramsSubscription: Subscription;
	errorMsg: string;
	dtTrigger: Subject<any>;

	@ViewChild(DataTableDirective)
	dtElement: DataTableDirective;
	dtOptions: DataTables.Settings = {};

	constructor(private route: ActivatedRoute, private _teamService: TeamService, private router: Router) {
		this.dtTrigger = new Subject();
	}

	ngOnInit() {
		this.paramsSubscription = this.route.params
			.subscribe(
			(params: Params) => {
				this.teamId = this.route.snapshot.params['id'];
				this._teamService.getTeam(this.teamId)
					.subscribe(resTeamData => this.record = resTeamData
					, resErrorData => this.errorMsg = resErrorData);

				this._teamService.getTeamFixture(this.teamId)
					.subscribe(resTeamData => this.fixtureData = resTeamData
					, resErrorData => this.errorMsg = resErrorData);

				if (this.teamId) {
					this._teamService.getTeamPlayers(this.teamId)
						.subscribe(resTeamData => { this.squadList = resTeamData; this.dtTrigger.next(); }
						, resErrorData => this.errorMsg = resErrorData);
				} else {
					this._teamService.getTeamPlayers(this.teamId)
						.subscribe(resTeamData => this.squadList = resTeamData
						, resErrorData => this.errorMsg = resErrorData);
				}
		});
	}


	ngOnDestroy() {
		this.paramsSubscription.unsubscribe();
	}

}
