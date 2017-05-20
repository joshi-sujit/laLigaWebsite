import { Component, OnInit, ViewChild } from '@angular/core';
import { TeamService } from '../team.service';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs/Rx';

@Component({
  selector: 'app-fixture',
  templateUrl: './fixture.component.html',
  styleUrls: ['./fixture.component.css']
})
export class FixtureComponent implements OnInit {
  _upcomingFixtureData = {};
  errorMsg: string;
  dtTrigger: Subject<any>;
  @ViewChild(DataTableDirective)
	dtElement: DataTableDirective;

	dtOptions: DataTables.Settings = {};
  constructor(private _teamService: TeamService) {
    this.dtTrigger = new Subject();
   }

  ngOnInit() {
    this._teamService.getUpcomingFixture()
			.subscribe(fixData => {this._upcomingFixtureData = fixData; this.dtTrigger.next(); }
			, resErrorData => this.errorMsg = resErrorData);
  }

}
